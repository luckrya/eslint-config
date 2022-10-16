import type { ArgumentsCamelCase } from "yargs";
import type { InjectArgs, InjectArgsAlias } from "./types";
import type { Source } from "../utils/writeSource";
import type { ComposableElements } from "./confirm";

import chalk from "chalk";
import boxen from "boxen";
import packageJson from "../utils/packageJson";
import confirmIfGitDirty from "../utils/confirmIfGitDirty";
import isTsProject from "../utils/isTsProject";
import addESLintConfig from "./addESLintConfig";
import addGitCommitLogLintConfig from "./addGitCommitLogLintConfig";
import addGitStagedLintConfig from "./addGitStagedLintConfig";
import addTsTypeCheckConfig from "./addTsTypeCheckConfig";
import writeSource from "../utils/writeSource";
import PackageManager from "../utils/packageManager";
import { confirmComposableElements, confirmProjectType } from "./confirm";
import { version } from "../../package.json";

/**
 * INJECT COMMAND
 */
export default async function inject(
  args: ArgumentsCamelCase<InjectArgs | InjectArgsAlias>
) {
  detectedTsProject();

  if (!(await confirmIfGitDirty())) return;

  let sources: Source[] = [];

  if (args.composable || args.c) {
    const elements = await confirmComposableElements();

    sources = await constructResource(elements);
  } else {
    const type = await confirmProjectType();
    sources = await constructResource(
      Object.assign(args, { type, eslintConfig: true })
    );
  }

  await writeSource(sources);

  console.info(chalk.green("\n📦 Dependency is being installed.."));
  await pm.install();

  printHelpInfo();
}

function detectedTsProject() {
  // pnpm warning: No projects matched the filters in "/Users/xxx/project"
  if (!packageJson.exists()) {
    console.warn(
      chalk.yellow(
        "\n🍌 The existence of a package.json file is not detected, this does not appear to be a project!\n"
      )
    );
    process.exit();
  }
  if (!isTsProject()) {
    console.warn(
      chalk.yellow(
        "\n🍌 The currently operating project is not a TypeScript project and the system cannot provide support!\n"
      )
    );
    process.exit();
  }
}

async function constructResource(elements: ComposableElements) {
  const sources: Source[] = [];

  if (elements.eslintConfig) {
    sources.push(await addESLintConfig(elements.type!));
  }

  if (elements.gitStaged) {
    sources.push(await addGitStagedLintConfig());
  }

  if (elements.gitCommitLog) {
    sources.push(await addGitCommitLogLintConfig());
  }

  if (elements.inspectTsType) {
    sources.push(await addTsTypeCheckConfig());
  }

  return sources;
}

function printHelpInfo() {
  const Box = boxen(
    chalk.bold(
      `🌟️ Thanks for using the ${chalk.cyan(
        `@luckrya/eslint-config-cli@${version}`
      )} tool, for more information about this tool, see ${chalk.underline(
        chalk.green("https://github.com/luckrya/eslint-config")
      )}`
    ),
    {
      align: "center",
      borderColor: "green",
      dimBorder: true,
      padding: 1,
    }
  );

  console.info();
  console.info(Box);
  console.info();
  console.info(chalk.green("✨ Done!"));
}

export const pm = new PackageManager();
