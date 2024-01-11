# @rc5/eslint-config-core

<p style="display:flex;">
  <img style="margin-right: 4px;" src="https://img.shields.io/npm/v/@rc5/eslint-config-core" alt="NPM Version" />
  <img style="margin-right: 4px;" src="https://img.shields.io/bundlephobia/minzip/@rc5/eslint-config-core" alt="npm bundle size (scoped)" >
  <img style="margin-right: 4px;" src="https://img.shields.io/npm/dm/@rc5/eslint-config-core.svg" alt="NPM Downloads" />
  <img style="margin-right: 4px;" src="https://img.shields.io/npm/l/@rc5/eslint-config-core" alt="License">

</p>

## 安装

```sh
$ npm install -D eslint prettier @rc5/eslint-config-core
```

## 使用

**via .eslintrc.js**

```js
module.exports = {
  extends: ["@rc5/core"],
};
```

**via package.json**

```json
{
  "eslintConfig": {
    "extends": ["@techive/core"]
  }
}
```

## 内置插件

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
- `plugin:import/typescript`
- `plugin:@typescript-eslint/recommended`
- `plugin:prettier/recommended`
