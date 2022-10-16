// https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies

import chalk from "chalk";
import loading from "../utils/loading";
import { pm } from ".";

// https://github.com/npm/node-semver#ranges
type NpmVersionTag = "*" | "^" | "~" | ">" | "=" | "<" | "<=" | ">=" | "";

function joinVersion(version?: string, tag: NpmVersionTag = "^") {
  return version ? `${tag}${version}` : "latest";
}

async function remoteLatestVersion(name: string) {
  let version: string | undefined;

  try {
    loading.start(
      chalk.blue(
        `Loading the remote version of the ${chalk.bgBlue(name)} package...`
      )
    );
    version = await pm.getRemoteVersion(name);
  } catch (error) {
    console.warn(
      chalk.yellow(
        `\n🍌  The remote version of ${name} is abnormally obtained, the system has defaulted to latest\n`
      )
    );
  } finally {
    loading.stop();
  }

  return joinVersion(version);
}

export default function latestVersions(names: string[]) {
  return Promise.all(names.map((name) => remoteLatestVersion(name)));
}
