import type { Source } from "../utils/writeSource";

import path from "path";
import deepmerge from "deepmerge";
import readTemplateFile from "../utils/readTemplateFile";
import latestVersions from "./latestVersions";
import { cwd } from "../const";
import { ProjectType } from "../enum";

const eslintDeps = {
  [ProjectType.Lib]: "@luckrya/eslint-config-base",
  [ProjectType.Vue]: "@luckrya/eslint-config-vue",
  [ProjectType.React]: "@luckrya/eslint-config-react",
};

/**
 * INJECT CONTENT：
 * - .eslintrc.js
 * - package.json
 *   - scripts
 *     - lint "eslint ."
 *   - devDeps
 *     - @luckrya/eslint-config-* "latest"
 *     - peerDevDeps
 */
export default async function addESLintConfig(type: ProjectType): Promise<
  Source<{
    type: ProjectType;
    ProjectType: typeof ProjectType;
  }>
> {
  return {
    message: `ESLint configuration written（${type.toLocaleUpperCase()}）!`,

    children: [
      {
        path: path.resolve(cwd, ".vscode/settings.json"),
        content: () => readTemplateFile("_vscode_settings"),
      },
      {
        path: path.resolve(cwd, ".eslintrc.js"),
        content: () => readTemplateFile("_eslintrc"),
        data: {
          type,
          ProjectType,
        },
      },
      {
        path: path.resolve(cwd, "package.json"),
        content: async (pkg) =>
          JSON.stringify(
            deepmerge(pkg, {
              scripts: {
                lint: "eslint . --fix",
              },
              devDependencies: {
                [eslintDeps[type]]: (
                  await latestVersions([eslintDeps[type]])
                )[0],
                jest:
                  pkg.devDependencies?.jest ||
                  pkg.dependencies?.jest ||
                  (await latestVersions(["jest"]))[0],
              },
            }),
            null,
            2
          ),
      },
    ],
  };
}
