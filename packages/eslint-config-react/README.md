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

```jsonc
{
  "scripts": {
    "lint": "eslint . --ext .tsx,.ts" // or eslint .
  }
}
```

## Rules

```yml
- "@luckrya/base"
```
