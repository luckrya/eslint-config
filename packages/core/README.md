# `@rc5/eslint-config-core`

<p>
  <img src="https://img.shields.io/npm/v/@rc5/eslint-config-core" alt="NPM Version" />
  <img src="https://img.shields.io/bundlephobia/minzip/@rc5/eslint-config-core" alt="npm bundle size (scoped)" >
  <img src="https://img.shields.io/npm/dm/@rc5/eslint-config-core.svg" alt="NPM Downloads" />
  <img src="https://img.shields.io/npm/l/@rc5/eslint-config-core" alt="License">
</p>

## 安装

```sh
~ npm install -D eslint prettier @rc5/eslint-config-core
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
    "extends": [
      "@techive/core"
    ]
  }
}
```

## 内置插件

- eslint-plugin-n
- eslint-plugin-promise
- eslint-plugin-unicorn
- eslint-plugin-import

---

- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin

---

- eslint-plugin-eslint-comments
- eslint-plugin-jsdoc
- eslint-plugin-markdown
- eslint-plugin-yml
- eslint-plugin-jsonc
- eslint-plugin-prettier
- eslint-config-prettier
- eslint-plugin-jest
