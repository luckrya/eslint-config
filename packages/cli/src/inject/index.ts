import type { ArgumentsCamelCase } from "yargs";
import type { InjectArgs, InjectArgsAlias } from "./types";

import { isPureObject } from "@luckrya/utility";

/**
 * INJECT COMMAND
 */
export default async function inject(
  args: ArgumentsCamelCase<InjectArgs | InjectArgsAlias>
) {
  if (isPureObject(args)) {
    console.info("//// TODO", args);
  }
}
