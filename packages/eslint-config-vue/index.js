/**
 * @desc ESLint Configuration Collection for Vue Applications The basic configuration here is applied
 *       to the validation of the TypeScript + Vue.js framework and automatically integrates the configuration
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
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],

  /**
   * More fine-grained formatting configuration
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns
   */
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    ...require("@luckrya/eslint-config-base").overrides,
  ],

  /**
   * ESLint comes with a large number of built-in rules and you can add more rules through plugins.
   * You can modify which rules your project uses either using configuration comments or configuration files.
   * https://eslint.org/docs/latest/user-guide/configuring/rules
   */
  rules: {
    // Custom additional rules needed by @luckrya/vue
    // https://eslint.vuejs.org/rules/
  },
};
