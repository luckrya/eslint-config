# `@luckrya/eslint-config-react`

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
