# `@luckrya/eslint-config-cli`

<p>
  <img src="https://img.shields.io/npm/v/@luckrya/eslint-config-cli" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dm/@luckrya/eslint-config-cli.svg" alt="NPM Downloads" />
  <img src="https://img.shields.io/npm/l/@luckrya/eslint-config-cli" alt="License">
  <img src="https://img.shields.io/bundlephobia/minzip/@luckrya/eslint-config-cli" alt="npm bundle size (scoped)" >
</p>

A tool to quickly integrate code specifications for your project. It mainly uses the official configuration of @luckrya/eslint-config-\*, allowing developers to focus more on business development. Simple and efficient.

## Installation

```sh
$ pnpm add global @luckrya/eslint-config-cli
$ ecc inject

# or No need to download 【 recommended 】
$ npx @luckrya/eslint-config-cli@latest inject
```

## Usage

```sh
$ ecc -h

Usage: ecc <command> [options]

Commands:
  ecc inject  Inject code specification (@luckrya/eslint-config-*) features for projects

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
```
