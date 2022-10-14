# `@luckrya/eslint-config-base`

基础规则集的整合，请参考下面的规则集

## 安装

```sh
$ pnpm add -D @luckrya/eslint-config-base

# peerDependencies -- 如果已经安装请忽略此步
$ pnpm add -D eslint prettier jest typescript
```

## 使用

**.eslintrc.js**

```js
module.exports = {
  extends: ["@luckrya/base"],
};
```

## 规则集

- @luckrya/core
- plugin:import/typescript
- plugin:@typescript-eslint/recommended
- plugin:prettier/recommended

<!-- | Rule                                                                            | Value   | Source               |
| ------------------------------------------------------------------------------- | ------- | -------------------- |
| [@typescript-eslint/adjacent-overload-signatures](adjacent-overload-signatures) | `error` | `@typescript-eslint` | -->
