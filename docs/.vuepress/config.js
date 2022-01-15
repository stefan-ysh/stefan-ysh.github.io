// const valineConf = require("./valineConf/index.js");
module.exports = {
  //reco 主题
  theme: "reco",
  // 博客配置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: "Category", // 默认文案 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: "Tag", // 默认文案 “标签”
    },
  },
  //reco 主题
  base: "/",
  title: "Stefan Blog",
  description: "A quiet place for me.",
  head: [
    ["link", { rel: "icon", href: "avatar.jpeg" }],
    ["link", { rel: "stylesheet", href: "/daily/font.css" }],
    ["meta", { name: "author", content: "苑帅" }],
    ["meta", { name: "keywords", content: "苑帅 vuepress 前端 记录 笔记" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require("moment");
          moment.locale("zh-cn");
          return moment(timestamp).format("LLLL");
        },
      },
    ],
    ["image", {}],
    // ['@vuepress/back-to-top']
  ],
  themeConfig: {
    type: "blog", //reco 主题类
    author: "苑帅",
    authorAvatar: "/avatar.jpeg", //reco 右侧头像
    lastUpdated: "更新时间",
    logo: "/avatar.jpeg",
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      // {
      //   text: "文章",
      //   ariaLabel: "文章",
      //   icon: "reco-category",
      //   // items: [
      //   //   {
      //   //     text: "简介",
      //   //     link: "/pages/me/introduce.md",
      //   //     icon: "reco-faq",
      //   //   },
      //   //   {
      //   //     text: "笔记",
      //   //     link:
      //   //       "/pages/reading-notes/ProfessionalJavaScriptForWebDevelopers/什么是JavaScript.md",
      //   //     icon: "reco-document",
      //   //   },
      //   // ],
      // },
      {
        text: "读书笔记",
        link: "/pages/reading-notes/",
        icon: "reco-suggestion",
      },
      { text: "学习笔记", link: "/pages/learn/", icon: "reco-suggestion" },
      { text: "日常", link: "/pages/daily/", icon: "reco-suggestion" },
      { text: "分享", link: "/pages/share/", icon: "reco-three" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      { text: "简介", link: "/pages/me/index.md", icon: "reco-faq" },
      {
        text: "Github",
        link: "https://github.com/stefan-ysh",
        icon: "reco-github",
      },
    ],
    sidebar: {
      "/pages/me/": [
        {
          title: "自我介绍",
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [["personal-info/introduce.md", "关于我"]],
        },
        {
          title: "其他",
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [["personal-info/introduce.md", "关于我"]],
        },
      ],
      "/pages/learn/": [
        {
          title: "html",
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [["html/first.md", "初识html"]],
        },
        {
          title: "CSS",
          collapsable: true,
          sidebarDepth: 1,
          children: [["css/first.md", "初识css"]],
        },
      ],
      "/pages/daily/": [
        {
          title: "2022年",
          collapsable: true,
          sidebarDepth: 1,
          children: [
            {
              title: "1月",
              collapsable: true,
              // 你可以使用 themeConfig.sidebarDepth 自定义此行为。默认深度是 1，它提取 h2 标题。
              // 将其设置为 0 将禁用标题链接，最大值为2，同时提取 h2 和 h3 标题。
              sidebarDepth: 1,
              children: [
                ["2022/01/15-my-first-post.md", "15日"],
                ["2022/01/15-test-daily.md", "15日"],
              ],
            },
            // {
            //   title: "2月",
            //   collapsable: true,
            //   sidebarDepth: 1,
            //   children: [
            //     ["2022/01/15-my-first-post.md", "15日"],
            //     ["2022/01/15-test-daily.md", "15日"],
            //   ],
            // },
          ],
        },
        // {
        //   title: "2022",
        //   collapsable: true,
        //   sidebarDepth: 1,
        //   children: [
        //     {
        //       title: "01",
        //       collapsable: true,
        //       sidebarDepth: 1,
        //       children: [
        //         ["2022/01/15-my-first-post.md", "15-第一文章"],
        //         ["2022/01/15-test-daily.md", "15-测试文章"],
        //       ],
        //     },
        //   ],
        // },
      ],
      "/pages/share/": [
        {
          title: "前端",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: "HTML",
              collapsable: false,
              sidebarDepth: 1,
              children: [["share.md", "福利向"]],
            },
            {
              title: "CSS",
              collapsable: false,
              sidebarDepth: 1,
              children: [["share.md", "福利向"]],
            },
            {
              title: "Javascript",
              collapsable: false,
              sidebarDepth: 1,
              children: [["share.md", "福利向"]],
            },
          ],
        },
        {
          title: "node",
          collapsable: false,
          sidebarDepth: 1,
          children: [["share.md", "福利向"]],
        },
        {
          title: "其他",
          collapsable: false,
          sidebarDepth: 1,
          children: [["share.md", "福利向"]],
        },
      ],
      "/pages/reading-notes/": [
        {
          title: "javaScript高级程序设计",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            // 每一章是一个child
            [
              "ProfessionalJavaScriptForWebDevelopers/什么是JavaScript.md",
              "什么是JavaScript",
            ],
            // [
            //   "ProfessionalJavaScriptForWebDevelopers/HTML中的JavaScript.md",
            //   "HTML中的JavaScript",
            // ],
          ],
        },
        // {
        //   title: "另一本书",
        //   collapsable: false,
        //   sidebarDepth: 1,
        //   children: [
        //     // 每一章是一个child
        //     [
        //       "ProfessionalJavaScriptForWebDevelopers/什么是JavaScript.md",
        //       "什么是JavaScript",
        //     ],
        //     [
        //       "ProfessionalJavaScriptForWebDevelopers/HTML中的JavaScript.md",
        //       "HTML中的JavaScript",
        //     ],
        //   ],
        // },
      ],
    },
    //评论
    valineConfig: {
      // valine 评论功能配置信息
      appId: "5Ig9Yv6xXwWKvvgwqLj2hKyB-gzGzoHsz", // your appId
      appKey: "KTMff9K1RAIxif1W2r76xrrr", // your appKey
      placeholder: "壮士别走，先唠十块钱儿的~", // 评论框占位符
      avatar: "robohash", // 评论用户的头像类型
      highlight: true, // 代码高亮
      recordIP: false, // 记录评论者的IP
      // visitor: true, // 阅读量统计
      enableQQ: true,
      // lang:'en' // 设置这里就ok
      // // 设置Bilibili表情包地址
      // emojiCDN: "//i0.hdslb.com/bfs/emote/",
      // // 表情title和图片映射
      // emojiMaps: {
      //   tv_doge: "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
      //   tv_亲亲: "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
      //   tv_偷笑: "bb690d4107620f1c15cff29509db529a73aee261.png",
      //   tv_再见: "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
      //   tv_冷漠: "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
      //   tv_发怒: "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
      //   tv_发财: "34db290afd2963723c6eb3c4560667db7253a21a.png",
      //   tv_可爱: "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
      //   tv_吐血: "09dd16a7aa59b77baa1155d47484409624470c77.png",
      //   tv_呆: "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
      //   tv_呕吐: "9f996894a39e282ccf5e66856af49483f81870f3.png",
      //   tv_困: "241ee304e44c0af029adceb294399391e4737ef2.png",
      //   tv_坏笑: "1f0b87f731a671079842116e0991c91c2c88645a.png",
      //   tv_大佬: "093c1e2c490161aca397afc45573c877cdead616.png",
      //   tv_大哭: "23269aeb35f99daee28dda129676f6e9ea87934f.png",
      //   tv_委屈: "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
      //   tv_害羞: "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
      //   tv_尴尬: "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
      //   tv_微笑: "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
      //   tv_思考: "90cf159733e558137ed20aa04d09964436f618a1.png",
      //   tv_惊吓: "0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
      //   // ... 更多表情
      // },
    },
    friendLink: [
      {
        //每一个{}中为一个友链
        title: "史蒂芬", //友联标题
        desc: "越努力，越热爱，越幸运", //友链描述
        email: "stefan_ysh@foxmail.com", //友链邮箱
        link: "https://stefan-ysh.github.io", //友链地址
      },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
  },
};
