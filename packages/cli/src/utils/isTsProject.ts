import path from "path";
import fs from "fs-extra";
import { cwd } from "../const";

// Determine if a project is a typescript project
export default function isTsProject(context: string = cwd) {
  return fs.existsSync(path.resolve(context, "tsconfig.json"));
}
