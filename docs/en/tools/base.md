# `@luckrya/eslint-config-base`

<p style="display:flex;">
  <img  style="margin-right: 4px;" src="https://img.shields.io/npm/v/@luckrya/eslint-config-base" alt="NPM Version" />
  <img  style="margin-right: 4px;" src="https://img.shields.io/npm/dm/@luckrya/eslint-config-base.svg" alt="NPM Downloads" />
  <img  style="margin-right: 4px;" src="https://img.shields.io/npm/l/@luckrya/eslint-config-base" alt="License">
  <img  style="margin-right: 4px;" src="https://img.shields.io/bundlephobia/minzip/@luckrya/eslint-config-base" alt="npm bundle size (scoped)" >
</p>

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
