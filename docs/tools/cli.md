# `@luckrya/eslint-config-cli`

<p>
  <img src="https://img.shields.io/npm/v/@luckrya/eslint-config-cli" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dm/@luckrya/eslint-config-cli.svg" alt="NPM Downloads" />
  <img src="https://img.shields.io/npm/l/@luckrya/eslint-config-cli" alt="License">
  <img src="https://img.shields.io/bundlephobia/minzip/@luckrya/eslint-config-cli" alt="npm bundle size (scoped)" >
</p>

为项目快速集成代码规范的工具。 主要使用 `@luckrya/eslint-config-*` 的官方配置；让开发者更加专注于业务开发、简单高效。

## 安装

```sh
$ pnpm add global @luckrya/eslint-config-cli
$ ecc inject

# 或无需下载 【推荐】
$ npx @luckrya/eslint-config-cli@latest inject
```

## 使用

```sh
$ ecc -h

Usage: ecc <command> [options]

Commands:
  ecc inject  Inject code specification (@luckrya/eslint-config-*) features for projects

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
```
