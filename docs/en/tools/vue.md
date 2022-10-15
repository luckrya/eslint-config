# `@luckrya/eslint-config-vue`

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

```sh
- "@luckrya/base"
- "plugin:vue/vue3-recommended"
- "plugin:prettier/recommended"
```

<!-- | Rule                                                                                             | Value   | Source              |
| ------------------------------------------------------------------------------------------------ | ------- | ------------------- |
| [vue/multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html) | `error` | `eslint-plugin-vue` | -->
