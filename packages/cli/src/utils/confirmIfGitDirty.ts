import chalk from "chalk";
import { execa } from "execa";
import { hasProjectGit } from "./hasProjectGit";
import confirmQuestion from "./confirmQuestion";

export default async function confirmIfGitDirty(cwd: string = process.cwd()) {
  // The repository does not use Git and does not need to be checked for cleanliness
  if (!hasProjectGit(cwd)) {
    console.warn(
      chalk.yellow(
        "\n🍌 fatal: not a git repository (or any of the parent directories): .git; the hooks that depend on husky will fail.",
        `  if you want to restore, please manually execute ${chalk.cyan(
          "git init"
        )} & ${chalk.cyan("npm run prepare")}\n`
      )
    );
    return true;
  }

  // Check if there are changed files
  // --porcelain machine-readable output
  const { stdout } = await execa("git", ["status", "--porcelain"], { cwd });
  if (!stdout) return true;

  console.warn(
    chalk.yellow(
      "\n🍌 There are uncommitted changes in the current repository, it is recommended to commit or stash them first.\n" +
        "   Because the command may permanently write some files to the project, please be aware!\n"
    )
  );

  return await confirmQuestion();
}
