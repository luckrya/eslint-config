import { defineConfig } from "vitepress";

export default defineConfig({
  title: "eslint-config",
  description: "自定义代码规范配置集，用于 @rc5 下的前端项目",
  lang: "zh-CN",
  base: "/eslint-config",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  themeConfig: {
    logo: "/eslint-config/logo.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/luckrya/eslint-config" },
    ],
    sidebar: {
      "/": [
        {
          text: "",
          items: [
            {
              text: "基础配置",
              link: "/pkgs/core",
            },
            {
              text: "Vue配置",
              link: "/pkgs/vue",
            },
            {
              text: "React配置",
              link: "/pkgs/react",
            },
            {
              text: "集成工具",
              link: "/pkgs/cli",
            },
          ],
        },
      ],
    },

    footer: {
      copyright: `Copyright © 2022-${new Date().getFullYear()} @rc5`,
    },
  },

  vite: {
    server: {
      port: 2022,
    },
  },

  ignoreDeadLinks: true,
});
