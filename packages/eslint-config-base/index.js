/**
 * @desc A collection of basic ESLint configurations, where the basic configuration is applied to the
 *       validation of pure TypeScript libraries, suitable for node and browser platforms, and automatically
 *       integrates the configuration required for unit testing (jest).
 *
 * @reference https://eslint.org/docs/latest/user-guide/configuring
 * @type {import("eslint/lib/shared/types").ConfigData}
 */
module.exports = {
  /**
   * Tell eslint that the directory where the configuration is located is the top level,
   * and you don't need to continue to search for the upper level directory
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files#cascading-and-hierarchy
   */
  root: true,

  /**
   * A configuration file, once extended, can inherit all the
   * traits of another configuration file (including rules, plugins, and
   * language options) and modify all the options.
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files#extending-configuration-files
   */
  extends: [
    "@luckrya/core",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],

  /**
   * ESLint comes with a large number of built-in rules and you can add more rules through plugins.
   * You can modify which rules your project uses either using configuration comments or configuration files.
   * https://eslint.org/docs/latest/user-guide/configuring/rules
   */
  rules: {
    // Custom additional rules needed by @luckrya/base
  },

  /**
   * More fine-grained formatting configuration
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns
   */
  overrides: [
    {
      files: ["*.test.{ts,js}", "*.spec.{ts,js}"],
      extends: ["plugin:jest/recommended"],
    },
    {
      // TIPS: can't put config inside @ren/core because "overrides" doesn't work when "extends" is nested
      // https://github.com/eslint/eslint/issues/8813#issuecomment-323247947
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
    },
  ],
};
