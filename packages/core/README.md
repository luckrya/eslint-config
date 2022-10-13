# `@luckrya/eslint-config-core`

Integration of some core rule sets, please refer to Rules below

## Installation

```sh
$ pnpm add -D @luckrya/eslint-config-core

# peerDependencies -- If it has been installed, ignore it
$ pnpm add -D eslint prettier jest
```

## Usage

**.eslintrc.js**

```js
module.exports = {
  extends: ["@luckrya/core"],
};
```

## Rules

- `eslint:recommended`
- `plugin:n/recommended`
- `plugin:promise/recommended`
- `plugin:import/recommended`
- `plugin:unicorn/recommended`
- `plugin:eslint-comments/recommended`
- `plugin:jsdoc/recommended`
- `plugin:jsonc/recommended-with-jsonc & plugin:jsonc/prettier`
- `plugin:yml/standard & plugin:yml/prettier`
- `plugin:markdown/recommended`
- `plugin:prettier/recommended`

<!-- | Rule                                                                                | Value                    | Source          |
| ----------------------------------------------------------------------------------- | ------------------------ | --------------- |
| [no-var](https://eslint.org/docs/latest/rules/no-var)                               | `error`                  | `eslint-config` |
| [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return) | `error`                  | `eslint-config` |
| [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)   | `error`                  | `eslint-config` |
| [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)   | `error`                  | `eslint-config` |
| [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)                               | `["error", "smart"]`     | `eslint-config` |
| [func-names](https://eslint.org/docs/latest/rules/func-names)                       | `["error", "as-needed"]` | `eslint-config` |
| [no-undefined](https://eslint.org/docs/latest/rules/no-undefined)                   | `error`                  | `eslint-config` |
| [](https://eslint.org/docs/latest/rules/)                                           | `error`                  |                 |
| [](https://eslint.org/docs/latest/rules/)                                           | `error`                  |                 |
| [](https://eslint.org/docs/latest/rules/)                                           | `error`                  |                 |
| [](https://eslint.org/docs/latest/rules/)                                           | `error`                  |                 |
| [](https://eslint.org/docs/latest/rules/)                                           | `error`                  |                 |
| [](https://eslint.org/docs/latest/rules/)                                           | `error`                  |                 | -->
