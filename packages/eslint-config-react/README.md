# `@luckrya/eslint-config-react`

<p>
  <img src="https://img.shields.io/npm/v/@luckrya/eslint-config-react" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dm/@luckrya/eslint-config-react.svg" alt="NPM Downloads" />
  <img src="https://img.shields.io/npm/l/@luckrya/eslint-config-react" alt="License">
  <img src="https://img.shields.io/bundlephobia/minzip/@luckrya/eslint-config-react" alt="npm bundle size (scoped)" >
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

```yml
- "@luckrya/base"
- "plugin:react/recommended"
- "plugin:react-hooks/recommended"
- "plugin:jsx-a11y/recommended"
- "plugin:prettier/recommended"
```

<!-- | Rule                                                                                                                   | Value   | Source                      |
| ---------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------- |
| [react-hooks/rules-of-hooks](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md) | `error` | `eslint-plugin-react-hooks` | -->
