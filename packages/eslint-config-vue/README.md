# `@luckrya/eslint-config-vue`

<p>
  <img src="https://img.shields.io/npm/v/@luckrya/eslint-config-vue" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dm/@luckrya/eslint-config-vue.svg" alt="NPM Downloads" />
  <img src="https://img.shields.io/npm/l/@luckrya/eslint-config-vue" alt="License">
  <img src="https://img.shields.io/bundlephobia/minzip/@luckrya/eslint-config-vue" alt="npm bundle size (scoped)" >
</p>

Integration of some vue rule sets, please refer to Rules below

## Installation

```sh
$ pnpm add -D @luckrya/eslint-config-vue
```

## Usage

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

## Rules

```yml
- "@luckrya/base"
- "plugin:vue/vue3-recommended"
- "plugin:prettier/recommended"
```

<!-- | Rule                                                                                             | Value   | Source              |
| ------------------------------------------------------------------------------------------------ | ------- | ------------------- |
| [vue/multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html) | `error` | `eslint-plugin-vue` | -->
