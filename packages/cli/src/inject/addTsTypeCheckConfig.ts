import type { Source } from "../utils/writeSource";

import path from "path";
import deepmerge from "deepmerge";
import { cwd } from "../const";
import latestVersions from "./latestVersions";

/**
 * INJECT CONTENT:
 * - package.json
 *   - scripts
 *     - "type:check": "tsc --noEmit"
 *     - "type:check:watch": "tsc --noEmit --watch"
 *   - devDeps
 *     - typescript: "latest"
 */
export default async function addTsTypeCheckConfig(): Promise<Source> {
  return {
    message: "TypeScript type checking config written!",

    path: path.resolve(cwd, "package.json"),
    content: async (pkg) =>
      JSON.stringify(
        deepmerge(pkg, {
          scripts: {
            "type:check": "tsc --noEmit",
            "type:check:watch": "tsc --noEmit --watch",
          },
          devDependencies: {
            typescript:
              pkg.devDependencies?.typescript ||
              pkg.dependencies?.typescript ||
              (await latestVersions(["typescript"]))[0],
          },
        }),
        null,
        2
      ),
  };
}
