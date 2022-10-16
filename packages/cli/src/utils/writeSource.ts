import type { Options } from "ejs";
import type { NormalizedPackageJson } from "read-pkg";

import fs from "fs-extra";
import chalk from "chalk";
import packageJson from "./packageJson";
import { render } from "ejs";
import { isError } from "@luckrya/utility";

export interface Source<D extends Record<string, any> = any> {
  message?: string;

  path?: string;
  data?: D;
  ejsOptions?: Options;
  content?: (pkg: NormalizedPackageJson) => string | Promise<string>;
  contentWrittenCb?: (source: Source<D>) => void | Promise<void>;

  children?: Source<D>[];
}

/**
 * The type of this function is not handled properly
 *
 * sources: "children" extends keyof S[]
 *   ? Pick<Source, "children" | "message">[]
 *   : Omit<Source, "children">[]
 */
export default async function writeSources<S extends Source[]>(sources: S) {
  async function write(source: S[number]) {
    // The source.content field certain exist here
    //
    // If the execution of the XXX function throws an exception,
    // the exception is leaked out and the program execution is interrupted,
    // because the writing of the file is critical
    const _content = render(
      await source.content?.(packageJson.load()!)!,
      source.data,
      {
        ...(source.ejsOptions || {}),
        async: false,
      }
    );

    fs.ensureFileSync(source.path!);
    fs.writeFileSync(source.path!, _content, { encoding: "utf8" });

    try {
      await source.contentWrittenCb?.(source);
    } catch (error) {
      console.warn(
        chalk.yellow(
          `${source.path} write callback call exception. ${
            isError(error) ? error.message : ""
          }`
        )
      );
    }
  }

  for (const source of sources) {
    if (source.message) {
      console.info(chalk.green(`🖍  ${source.message}`));
    }

    if (Array.isArray(source.children)) {
      await writeSources(source.children);
    } else {
      await write(source);
    }
  }
}
