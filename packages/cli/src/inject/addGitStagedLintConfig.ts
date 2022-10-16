import type { Source } from "../utils/writeSource";

import path from "path";
import fs from "fs-extra";
import deepmerge from "deepmerge";
import { cwd } from "../const";
import readTemplateFile from "../utils/readTemplateFile";
import latestVersions from "./latestVersions";

/**
 * INJECT CONTENT：
 * - .husky/pre-commit
 * - package.json
 *   - devDeps
 *     - "lint-staged": "latest"
 *     - "husky": "latest"
 *     - "prettier": "latest",
 *     - "eslint": "latest",
 *   - "lint-staged"
 *     - "*": "prettier --write"
 *     - "*.{ts,js,vue,jsx,tsx}": "eslint --fix"
 *
 * In --composable mode, only the above will be injected when only gitStaged is selected,
 * If the project itself has no eslint related configuration or no installation dependencies (eslint/prettier),
 * The system will not inject any configuration, it is up to the user to configure the configuration they need.
 */
export default async function addGitStagedLintConfig(): Promise<Source> {
  return {
    message: "Git Staged Lint configuration has been written!",

    children: [
      {
        path: path.resolve(cwd, ".husky/pre-commit"),
        content: () => readTemplateFile("pre-commit"),
        contentWrittenCb: async (source) => {
          // https://nodejs.org/docs/latest-v17.x/api/fs.html#fschmodpath-mode-callback
          // https://www.pluralsight.com/blog/it-ops/linux-file-permissions
          fs.chmodSync(source.path!, 0o755);
        },
      },
      {
        path: path.resolve(cwd, "package.json"),
        content: async (pkg) =>
          JSON.stringify(
            deepmerge(pkg, {
              "lint-staged": {
                "*": "eslint --fix",
              },
              devDependencies: {
                "lint-staged": (await latestVersions(["lint-staged"]))[0],
                eslint:
                  pkg.dependencies?.eslint ||
                  pkg.devDependencies?.eslint ||
                  (await latestVersions(["eslint"]))[0],
                prettier:
                  pkg.dependencies?.prettier ||
                  pkg.devDependencies?.prettier ||
                  (await latestVersions(["prettier"]))[0],
              },
            }),
            null,
            2
          ),
      },
    ],
  };
}
