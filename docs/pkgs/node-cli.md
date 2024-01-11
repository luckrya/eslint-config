# Command Line Interface（Node.js）

## What ?

- [Command-line interface (wiki 解释)](https://en.wikipedia.org/wiki/Command-line_interface)
- 使用 JavaScript/TypeScript 语言实现
- 借助 Node.js 这个库，使得 JS 运行在非浏览器环境
- 在命令行界面运行的一个或多个命令，来实现特定功能

## How ?

- 新建项目
- 构建命令行应用程序简单而高效的框架
  - 命令、以及命令参数注册、解析
  - 命令信息提示罗列
  - 相关库 [10 Best Node.js CLI Libraries](https://openbase.com/categories/js/best-nodejs-cli-libraries)
    - [commander.js](https://github.com/tj/commander.js)
    - [cac](https://github.com/cacjs/cac)
    - [yargs](https://github.com/yargs/yargs)
- 征询机制
  - 根据用户反馈，键入一些答复（数据），可以是 confirm、select、list 等
  - 相关库
    - [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
    - [enquirer](https://github.com/enquirer/enquirer)
    - [prompts](https://github.com/terkelg/prompts)
- 命令行参数解析
  - 相关库
    - [minimist](https://github.com/substack/minimist)
- 命令行文案色彩
  - 相关库
    - [chalk](https://github.com/chalk/chalk)
- 文件操作
  - 相关库
    - [node-fs-extra](https://github.com/jprichardson/node-fs-extra)
- 子进程
  - 相关库
    - [execa]()

## Why ?

<!--
## monorepo
- https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md
- https://github.com/boltpkg/bolt


- 只能用来格式化 JS 代码，任何非 JS 代码想要借用此工具，
  则需要配置相应的 parser 工具进行转换源码
- 前端项目常规包含的文件种类
  - javascript 相关
    - JavaScript、TypeScript、React、Vue、Svelte
  - CSS/HTML
    - html、css、less、sass、stylus
  - 其它
    - Markdown、JSON、Ymal、Shell、dotfile
- 最终方案
  - 所有文件格式规范，全部交给 prettier 处理
  - JS（包含方言） 潜在问题校验交给 ESLint
  - 针对不同项目类型，应用不同配置
    - 纯 JavaScript 项目（库）<node | browser>
    - 纯 TypeScript 项目（库）<node | browser>
    - React 项目
    - Vue 项目
    - Svelte 项目（暂时不实现）
  - 项目一键集成命令


 -->
