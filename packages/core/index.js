/**
 * @desc The core ESLint configuration collection
 *       The basic configuration here is applied to the validation of pure JavaScript libraries,
 *       suitable for node and browser platforms, and automatically integrates the configuration
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
   * Adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.
   * Browser global variables & Node.js global variables and Node.js scoping
   * https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments
   */
  env: {
    es2022: true,
    browser: true,
    node: true,
  },

  /**
   * An object specifying additional objects that should be added to the global scope during linting.
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-global-variables
   */
  globals: require("./globals"),

  /**
   * Report unused eslint disable annotation so it can be removed
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#reporting-unused-disable-directives
   */
  reportUnusedDisableDirectives: true,

  /**
   * Tell ESLint to ignore specific files and directories.
   * Patterns defined in .eslintignore take precedence over the ignorePatterns property of config files.
   * https://eslint.org/docs/latest/user-guide/configuring/ignoring-code#ignorepatterns-in-config-files
   */
  ignorePatterns: [
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "LICENSE*",
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    "dist",
    "build",
    "coverage",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],

  /**
   * An object specifying additional options that are passed directly to the parser() method on the parser.
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-a-custom-parser-and-its-options
   */
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  /**
   * Configure the plugin to be used. If the rules provided by
   * the plugin are not used, you can leave it unconfigured.
   * https://eslint.org/docs/latest/user-guide/configuring/plugins#configuring-plugins
   */
  plugins: ["n"],

  /**
   * ESLint comes with a large number of built-in rules and you can add more rules through plugins.
   * You can modify which rules your project uses either using configuration comments or configuration files.
   * https://eslint.org/docs/latest/user-guide/configuring/rules
   */
  rules: {
    // https://eslint.org/docs/latest/rules/
    "no-var": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-use-before-define": "error",
    eqeqeq: ["error", "smart"],
    "func-names": ["error", "as-needed"],
    "no-undefined": "error",
    "prefer-object-has-own": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    radix: ["error", "as-needed"],
    "require-await": "error",

    // https://github.com/eslint-community/eslint-plugin-n#-rules
    // The following are rule validations that may have potential problems in node.js code
    "n/no-deprecated-api": "error",
    "n/no-exports-assign": "error",
    "n/no-new-require": "error",
    "n/no-path-concat": "error",
    "n/no-unpublished-bin": "error",
    "n/process-exit-as-throw": "error",
    "n/no-missing-require": "error", // import/no-unresolved use default（ESModule）

    // TODO:
    // Disallows the global variables __dirname and __filename.
    // https://nodejs.org/api/esm.html#esm_no_filename_or_dirname
    // Prefer using the JavaScript module format over the legacy CommonJS module format.
    // https://medium.com/sindre-sorhus/get-ready-for-esm-aa53530b3f77
    // "unicorn/prefer-module": "off",
    // Refine this rule, for example, ignore it in some dot files,
    // because they are often modules of the commonjs specification

    // https://github.com/eslint-community/eslint-plugin-promise#rules
    "promise/always-return": "off",
    "promise/no-return-in-finally": "error",

    // https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules
    "jsdoc/require-jsdoc": "off",

    // https://github.com/sindresorhus/eslint-plugin-unicorn#rules
    "unicorn/consistent-destructuring": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": [
      "error",
      { cases: { kebabCase: true, pascalCase: true } },
    ],
    "unicorn/import-style": "off",
    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-for-each": "warn",
    "unicorn/no-console-spaces": "off",
    "unicorn/no-for-loop": "off",
    "unicorn/no-null": "off",
    "unicorn/no-object-as-default-parameter": "off",
    "unicorn/no-process-exit": "warn",
    "unicorn/no-unreadable-array-destructuring": "off",
    "unicorn/no-useless-fallback-in-spread": "off",
    "unicorn/no-useless-promise-resolve-reject": "off",
    "unicorn/no-useless-spread": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-add-event-listener": "off",
    "unicorn/prefer-default-parameters": "off",
    "unicorn/prefer-export-from": "off",
    "unicorn/prefer-json-parse-buffer": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-regexp-test": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prefer-type-error": "off",
    "unicorn/prevent-abbreviations": "off",
  },

  /**
   * A configuration file, once extended, can inherit all the
   * traits of another configuration file (including rules, plugins, and
   * language options) and modify all the options.
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files#extending-configuration-files
   */
  extends: [
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:import/recommended",
    "plugin:unicorn/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsdoc/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:jsonc/prettier",
    "plugin:yml/standard",
    "plugin:yml/prettier",
    "plugin:markdown/recommended",
    "plugin:prettier/recommended",
  ],

  /**
   * More fine-grained formatting configuration
   * https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns
   */
  overrides: [
    {
      files: ["*.test.js", "*.spec.js"],
      extends: ["plugin:jest/recommended"],
    },
  ],
};
