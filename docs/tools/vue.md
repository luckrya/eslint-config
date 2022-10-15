# `@luckrya/eslint-config-vue`

vue 规则集的集成，请参考下面的规则

## 安装

```sh
$ pnpm add -D @luckrya/eslint-config-vue
```

## 使用

**.eslintrc.js**

```js
module.exports = {
  extends: ["@luckrya/vue"],
};
```

```jsonc
{
  "scripts": {
    "lint": "eslint . --ext .vue,.ts,.tsx" // or eslint .
  }
}
```

## 规则集

```sh
- "@luckrya/base"
- "plugin:vue/vue3-recommended"
- "plugin:prettier/recommended"
```

<!-- | Rule                                                                                             | Value   | Source              |
| ------------------------------------------------------------------------------------------------ | ------- | ------------------- |
| [vue/multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html) | `error` | `eslint-plugin-vue` | -->
