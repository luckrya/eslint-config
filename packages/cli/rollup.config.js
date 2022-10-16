import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { name, version } from "./package.json";

const isProd = process.env.NODE_ENV === "production";

/**
 * @desc Rollup Config
 * @type {(commandLineArgs: {_: string[];[k: string]: string | number | boolean }) => import('rollup').RollupOptions}
 */
export default (commandLineArgs) => ({
  input: path.resolve(__dirname, "src/index.ts"),

  plugins: [
    nodeResolve({
      extensions: [".ts", ".js", ".json"],
      exportConditions: ["node"],
      preferBuiltins: false,
    }),

    commonjs(),

    json(),

    babel({
      extensions: [".ts", ".js"],
      babelHelpers: "bundled",
      include: ["src/**/*"],
      exclude: ["node_modules"],
    }),
  ],

  output: MODULE_FORMATS.map((format) => ({
    file: path.resolve(
      __dirname,
      `dist/${PKG_SUB_SCOPE_NAME}.${format}.min.js`
    ),
    name: PKG_SUB_SCOPE_NAME.toLocaleUpperCase().replaceAll("-", "_"),
    plugins: isProd
      ? [
          terser({
            module: true,
            format: {
              comments: "some",
            },
          }),
        ]
      : [],
    format,
    banner,
    inlineDynamicImports: true,
  })),
});

const MODULE_FORMATS = ["cjs", "esm"];

const PKG_SUB_SCOPE_NAME = name.match(/(@\w+\/)((\w|_|-)+)/)
  ? name.match(/(@\w+\/)((\w|_|-)+)/)[2]
  : "";

const banner = `/*!
  * ${name} v${version}
  * (c) 2022 - ${new Date().getFullYear()} Y.R
  * Released under the MIT License.
  */
  `;
