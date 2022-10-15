# `@luckrya/eslint-config-react`

<p style="display:flex;">
  <img  style="margin-right: 4px;" src="https://img.shields.io/npm/v/@luckrya/eslint-config-react" alt="NPM Version" />
  <img  style="margin-right: 4px;" src="https://img.shields.io/npm/dm/@luckrya/eslint-config-react.svg" alt="NPM Downloads" />
  <img  style="margin-right: 4px;" src="https://img.shields.io/npm/l/@luckrya/eslint-config-react" alt="License">
  <img  style="margin-right: 4px;" src="https://img.shields.io/bundlephobia/minzip/@luckrya/eslint-config-react" alt="npm bundle size (scoped)" >
</p>

Integration of some react rule sets, please refer to Rules below

## Installation

```sh
$ pnpm add -D @luckrya/eslint-config-react
```

## Usage

**.eslintrc.js**

```js
module.exports = {
  extends: ["@luckrya/react"],
};
```

```json
{
  "scripts": {
    "lint": "eslint . --ext .tsx,.ts" // or eslint .
  }
}
```

## Rules

```sh
- "@luckrya/base"
- "plugin:react/recommended"
- "plugin:react-hooks/recommended"
- "plugin:jsx-a11y/recommended"
- "plugin:prettier/recommended"
```

<!-- | Rule                                                                                                                   | Value   | Source                      |
| ---------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------- |
| [react-hooks/rules-of-hooks](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md) | `error` | `eslint-plugin-react-hooks` | -->
