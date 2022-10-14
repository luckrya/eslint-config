# `@luckrya/eslint-config-base`

Integration of some base rule sets, please refer to Rules below

## Installation

```sh
$ pnpm add -D @luckrya/eslint-config-base

#【peerDependencies】 If it has been installed, ignore it
$ pnpm add -D eslint prettier jest typescript
```

## Usage

**.eslintrc.js**

```js
module.exports = {
  extends: ["@luckrya/base"],
};
```

## Rules

- @luckrya/core
- plugin:import/typescript
- plugin:@typescript-eslint/recommended
- plugin:prettier/recommended

<!-- | Rule                                                                            | Value   | Source               |
| ------------------------------------------------------------------------------- | ------- | -------------------- |
| [@typescript-eslint/adjacent-overload-signatures](adjacent-overload-signatures) | `error` | `@typescript-eslint` | -->
