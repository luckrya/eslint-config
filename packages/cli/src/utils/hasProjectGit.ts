import { execSync } from "child_process";

// Whether the project uses Git as a version control tool
export function hasProjectGit(cwd: string = process.cwd()) {
  let result: boolean;

  try {
    execSync("git status", { stdio: "ignore", cwd });
    result = true;
  } catch (e) {
    result = false;
  }

  return result;
}
