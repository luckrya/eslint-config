import type { InjectArgs } from "./inject/types";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { version, description } from "../package.json";
import { ProjectType } from "./enum";
import inject from "./inject";

const cli = yargs(hideBin(process.argv))
  .scriptName("ecc")
  .usage(description)
  .usage(`\nUsage: $0 <command> [options]`)
  .version(version)
  .alias("h", "help")
  .alias("v", "version")
  .strict()
  .showHelpOnFail(false);

cli.command<InjectArgs>(
  "inject",
  "Inject code specification (@luckrya/eslint-config-*) features for projects",
  (argv) => {
    argv
      .help()
      .option("type", {
        alias: "t",
        default: "lib",
        type: "string",
        choices: Object.values(ProjectType),
        describe: "Project type of the current operation",
      })
      .option("gitCommitLog", {
        alias: "g",
        default: true,
        type: "boolean",
        describe: "Git commit log inspection script",
      })
      .option("gitStaged", {
        alias: "s",
        default: true,
        type: "boolean",
        describe:
          "Format the files in the Git staging area before committing the repository",
      })
      .option("inspectTsType", {
        alias: "i",
        default: true,
        type: "boolean",
        describe: "TS code type inspect",
      })
      .option("composable", {
        alias: "c",
        default: false,
        type: "boolean",
        describe: "Whether the injected element is combinable for selection",
      })
      .help()
      .strict();
  },
  inject
);

cli.help().argv;
