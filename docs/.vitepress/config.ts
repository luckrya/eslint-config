import { defineConfig } from "vitepress";

export default defineConfig({
  title: "eslint-config",
  description:
    "All tools for Monorepo, serving ESLint config presets organized by @luckrya",
  lang: "zh-CN",
  base: "/eslint-config",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "eslint-config",
      description:
        "eslint-config 所有工具包，eslint 内置预设配置服务于 luckrya 组织",
    },
    "/en/": {
      lang: "en-US",
      title: "eslint-config",
      description:
        "All tools for Monorepo, serving ESLint config presets organized by @luckrya",
    },
  },
  themeConfig: {
    logo: "/logo.png",

    localeLinks: {
      text: "",
      items: [
        {
          text: "简体中文",
          link: "/",
        },
        {
          text: "English",
          link: "/en/",
        },
      ],
    },

    sidebar: {
      // BUG: vitepress locales i118
      "/en/": [
        {
          text: "Packages",
          items: [
            {
              text: "CLI",
              link: "/en/tools/cli",
            },
            {
              text: "JavaScript Config",
              link: "/en/tools/core",
            },
            {
              text: "TypeScript Config",
              link: "/en/tools/base",
            },
            {
              text: "React Config",
              link: "/en/tools/react",
            },
            {
              text: "Vue Config",
              link: "/en/tools/vue",
            },
          ],
        },
      ],

      "/": [
        {
          text: "工具包",
          items: [
            {
              text: "CLI",
              link: "/tools/cli",
            },
            {
              text: "JavaScript 配置",
              link: "/tools/core",
            },
            {
              text: "TypeScript 配置",
              link: "/tools/base",
            },
            {
              text: "React 配置",
              link: "/tools/react",
            },
            {
              text: "Vue 配置",
              link: "/tools/vue",
            },
          ],
        },
      ],
    },

    footer: {
      copyright: `Copyright © 2022-${new Date().getFullYear()} R.Y`,
    },
  },

  vite: {
    server: {
      port: 2022,
    },
  },
});
