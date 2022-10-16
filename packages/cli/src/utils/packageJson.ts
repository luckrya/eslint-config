import type { NormalizedPackageJson } from "read-pkg";

import path from "path";
import fs from "fs-extra";
import deepmerge from "deepmerge";
import { readPackageSync } from "read-pkg";
import { cwd } from "../const";

function exists(context: string = cwd) {
  return fs.existsSync(path.resolve(context, "package.json"));
}

function load(context: string = cwd) {
  let pkg;

  if (exists(context)) {
    pkg = readPackageSync({ cwd: context });
  }

  return pkg;
}

function write(pkg: Partial<NormalizedPackageJson>, context: string = cwd) {
  if (exists(context)) {
    const newPkg = deepmerge(load(context) || {}, pkg);

    fs.writeJsonSync(path.resolve(context, "package.json"), newPkg, {
      spaces: 2,
    });
  }
}

export default {
  exists,
  load,
  write,
};
