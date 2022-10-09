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
              text: "Core Config",
              link: "/en/tools/core",
            },
          ],
        },
      ],

      "/": [
        {
          text: "工具包",
          items: [
            {
              text: "核心配置",
              link: "/tools/core",
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
