import chalk from "chalk";
import semver from "semver";
import packageJson from "./packageJson";
import { cwd } from "../const";
import { isError } from "@luckrya/utility";

const HUSKY_VERSION_8 = "8.0.0";
const HUSKY_HOOK_COMMIT_MSG = "sh .husky/commit-msg";
const HUSKY_SCRIPT_PREPARE = "husky install";

function exists(context: string = cwd) {
  let exists = true;

  const pkg = packageJson.load(context);

  if (!pkg?.dependencies?.husky && !pkg?.devDependencies?.husky) {
    exists = false;
  }

  return exists;
}

// If the version number is obtained abnormally,
// it will be processed directly according to the latest version
function beforeVersion8(v: string | semver.SemVer) {
  let result = false;
  try {
    result = semver.lt(v, HUSKY_VERSION_8);
  } catch (e) {
    console.warn(
      chalk.yellow(
        `\n🍌 The current project's dependency husky version number is abnormal, and the abnormal information is as follows: ${
          isError(e) ? e.message : "Error"
        }\n`
      )
    );
  }

  return result;
}

export default {
  HUSKY_HOOK_COMMIT_MSG,
  HUSKY_SCRIPT_PREPARE,
  exists,
  beforeVersion8,
};
