/*
 * @description  : 总配置文件
 * @Author       : k423
 * @Date         : 2020-06-17 13:56:20
 * @LastEditors  : k423
 * @LastEditTime : 2020-06-17 16:06:24
 * @FilePath     : \k.blog\docs\.vuepress\config.js
 */
module.exports = {
  title: "K.blog",
  description: "你好，有缘人~",
  // 注入到html<head>中的标签
  head: [
    // 增加一个自定义的favicon
    ["link", { rel: "icon", href: "/k.png" }],
  ],
  base: "/",
  markdown: {
    // 代码块显示行号
    lineNumber: true,
  },

  // 主题配置
  themeConfig: {
    // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    sidebarDepth: 2,
    // 文档更新时间：每个文件git最后提交的时间
    lastUpdated: "Last Update",

    // 导航栏配置
    nav: [
      // 下拉列表
      {
        text: "FrontEnd",
        items: [
          { text: "React", link: "/front-end/react/introduction" },
          { text: "Vue", link: "/front-end/vue/introduction" },
        ],
      },
      {
        text: "BackEnd",
        items: [
          { text: "Node.js", link: "/back-end/node.js/introduction" },
          { text: "Nest.js", link: "/back-end/nest.js/introduction" },
          { text: "Express", link: "/back-end/express/introduction" },
        ],
      },
      {
        text: "Android",
        items: [
          { text: "Flutter", link: "/android/flutter/introduction" },
          { text: "Java", link: "/android/java/introduction" },
          { text: "Kotlin", link: "/android/kotlin/introduction" },
        ],
      },
      {
        text: "Database",
        items: [
          { text: "MySQL", link: "/database/mysql/introduction" },
          { text: "MongoDB", link: "/database/mongodb/introduction" },
        ],
      },
      { text: "k423.info", link: "http://www.k423.info" }, // 外部链接
      { text: "GitHub", link: "http://www.github.com/k423-d" }, // 外部链接
    ],

    // 侧边栏
    sidebar: {
      // docs文件夹下面的front-end文件夹 文档中md文件 书写的位置(命名随意)
      "/front-end/": [
        // "/front-end/", // front-end文件夹的README.md 不是下拉框形式
        {
          collapsable: false,
          title: "React",
          children: [
            "/front-end/react/introduction", // 以docs为根目录来查找文件
            // 上面地址查找的是：docs>front-end>react>introduction.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ],
        },
        {
          collapsable: false,
          title: "Vue",
          children: ["/front-end/vue/introduction"],
        },
      ],
      // docs文件夹下面的back-end文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      "/back-end/": [
        {
          collapsable: false,
          title: "Node.js",
          children: ["/back-end/node.js/introduction"],
        },
        {
          collapsable: false,
          title: "Nest.js",
          children: ["/back-end/nest.js/introduction"],
        },
        {
          collapsable: false,
          title: "Express",
          children: ["/back-end/express/introduction"],
        },
      ],
      "/android/": [
        {
          collapsable: false,
          title: "Flutter",
          children: ["/android/flutter/introduction"],
        },
        {
          collapsable: false,
          title: "Java",
          children: ["/android/java/introduction"],
        },
        {
          collapsable: false,
          title: "Kotlin",
          children: ["/android/kotlin/introduction"],
        },
      ],
      "/database/": [
        {
          collapsable: false,
          title: "MySQL",
          children: ["/database/mysql/introduction"],
        },
        {
          collapsable: false,
          title: "Mongodb",
          children: ["/database/mongodb/introduction"],
        },
      ],
    },
  },
};
