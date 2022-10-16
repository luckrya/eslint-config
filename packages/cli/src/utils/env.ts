import path from "path";
import fs from "fs-extra";
import { execSync } from "child_process";

let _hasYarn: boolean;
let _hasPnpm: boolean;

export function hasYarn() {
  if (_hasYarn != null) {
    return _hasYarn;
  }
  try {
    execSync("yarn --version", { stdio: "ignore" });
    return (_hasYarn = true);
  } catch (e) {
    return (_hasYarn = false);
  }
}

export function hasPnpm() {
  if (_hasPnpm != null) {
    return _hasPnpm;
  }
  try {
    execSync("pnpm --version", { stdio: "ignore" });
    return (_hasPnpm = true);
  } catch (e) {
    return (_hasPnpm = false);
  }
}

function checkYarn(result: boolean) {
  if (result && !hasYarn()) {
    throw new Error(
      "The project seems to require Yarn, but it is not installed."
    );
  }

  return result;
}

export function hasProjectYarn(context: string) {
  const lockFile = path.join(context, "yarn.lock");
  const result = fs.existsSync(lockFile);
  return checkYarn(result);
}

function checkPnpm(result: boolean) {
  if (result && !hasPnpm()) {
    throw new Error(
      "The project seems to require Pnpm, but it is not installed."
    );
  }
  return result;
}

export function hasProjectPnpm(context: string) {
  const lockFile = path.join(context, "pnpm-lock.yaml");
  const result = fs.existsSync(lockFile);

  return checkPnpm(result);
}
