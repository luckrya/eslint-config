import type { Source } from "../utils/writeSource";

import path from "path";
import fs from "fs-extra";
import deepmerge from "deepmerge";
import packageJson from "../utils/packageJson";
import husky from "../utils/husky";
import readTemplateFile from "../utils/readTemplateFile";
import { cwd } from "../const";
import latestVersions from "./latestVersions";

/**
 * INJECT CONTENT：
 *
 * husky version >= 8
 * - .husky/commit-msg
 * - package.json
 *  - scripts
 *    - "prepare": "husky install"
 *  - devDeps
 *    - "husky": "latest"
 *
 * husky version < 8 (husky exists)
 * - .husky/commit-msg
 * - package.json
 *   - husky
 *     - hooks
 *       - "commit-msg": "sh .husky/commit-msg"
 */
export default async function addGitCommitLogLintConfig() {
  const pkg = packageJson.load();

  const config: Source = {
    message: "Written in git commit log format configuration!",

    children: [],
  };

  const commitMsgContent = () => {
    config.children?.push({
      path: path.resolve(cwd, ".husky/commit-msg"),
      content: () => readTemplateFile("commit-msg"),
      contentWrittenCb: async (source) => {
        // https://nodejs.org/docs/latest-v17.x/api/fs.html#fschmodpath-mode-callback
        // https://www.pluralsight.com/blog/it-ops/linux-file-permissions
        fs.chmodSync(source.path!, 0o755);
      },
    });
  };

  const pkgContent = (
    extraPkg: Record<string, unknown> | (() => Promise<Record<string, unknown>>)
  ) => {
    config.children?.push({
      path: path.resolve(cwd, "package.json"),
      content: async (pkg) => {
        const _extraPkg =
          typeof extraPkg === "function" ? await extraPkg() : extraPkg;
        return JSON.stringify(deepmerge(pkg!, _extraPkg), null, 2);
      },
    });
  };

  if (!husky.exists()) {
    pkgContent(async () => ({
      scripts: {
        prepare: husky.HUSKY_SCRIPT_PREPARE,
      },
      devDependencies: {
        husky: (await latestVersions(["husky"]))[0],
      },
    }));

    commitMsgContent();
  } else {
    if (
      husky.beforeVersion8(
        pkg!.devDependencies?.husky! || pkg!.dependencies?.husky!
      )
    ) {
      // old version
      pkgContent({
        husky: {
          hooks: {
            "commit-msg": husky.HUSKY_HOOK_COMMIT_MSG,
          },
        },
      });

      commitMsgContent();
    } else {
      // new version
      pkgContent({
        scripts: {
          prepare: husky.HUSKY_SCRIPT_PREPARE,
        },
      });

      commitMsgContent();
    }
  }

  return config;
}
