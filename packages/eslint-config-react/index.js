/**
 * @desc ESLint Configuration Collection for React Applications The basic configuration here is applied
 *       to the validation of the TypeScript + Reactjs framework and automatically integrates the configuration
 *       required for unit testing (jest).
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
    "@luckrya/base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],

  /**
   * ESLint supports adding shared settings into configuration files. Plugins use settings to specify information
   * that should be shared across all of its rules
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files#adding-shared-settings
   */
  settings: {
    react: {
      version: "17.0",
    },
  },

  /**
   * More fine-grained formatting configuration
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns
   */
  overrides: require("@luckrya/eslint-config-base").overrides,

  /**
   * ESLint comes with a large number of built-in rules and you can add more rules through plugins.
   * You can modify which rules your project uses either using configuration comments or configuration files.
   * https://eslint.org/docs/latest/user-guide/configuring/rules
   */
  rules: {
    // Custom additional rules needed by @luckrya/react
    // https://eslint.vuejs.org/rules/
  },
};
