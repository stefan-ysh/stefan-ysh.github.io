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
    ["link", { rel: "stylesheet", href: "/moment/font.css" }],
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
    // [
    //   "@vuepress/last-updated",
    //   {
    //     transformer: (timestamp) => {
    //       // 不要忘了安装 moment
    //       const moment = require("moment");
    //       moment.locale("zh-cn");
    //       return moment(timestamp).format("LLLL");
    //     },
    //   },
    // ],
    ["image", {}],
    // ['@vuepress/back-to-top']
  ],
  themeConfig: {
    type: "blog", //reco 主题类
    author: "苑帅",
    authorAvatar: "/avatar.jpeg", //reco 右侧头像
    // lastUpdated: "lastUpdated",
    logo: "/avatar.jpeg",
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      // { text: "文章", link: "/pages/learn/", icon: "reco-suggestion" },
      {
        text: "笔记",
        ariaLabel: "笔记",
        icon: "reco-suggestion",
        items: [
          {
            text: "读书",
            link: "/pages/reading-notes/",
            icon: "reco-faq",
          },
          {
            text: "学习",
            link: "/pages/learn/",
            icon: "reco-document",
          },
        ],
      },
      { text: "说说", link: "/pages/moment/", icon: "reco-suggestion" },
      { text: "分享", link: "/pages/share/", icon: "reco-three" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "简介",
        link: "/pages/me/personal-info/introduce.md",
        icon: "reco-document",
      },
      {
        text: "Github",
        link: "https://github.com/stefan-ysh",
        icon: "reco-github",
      },
    ],
    sidebar: {
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
      "/pages/moment/": [
        {
          title: "2021年",
          collapsable: true,
          sidebarDepth: 1,
          children: [
            {
              title: "8月",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                ["2021/08/29-mother-killing-case.md", "29日"],
              ],
            },
            {
              title: "9月",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                ["2021/09/07-smart-comment.md", "7日"],
                ["2021/09/07-new-wallpaper.md", "7日"],
              ],
            },
          ],
        },
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
                ["2022/01/14-jay-chou-come-to-me-home.md", "14日"],
                ["2022/01/15-my-first-post.md", "15日"],
                ["2022/01/23-back-to-jilin.md", "23日"],
                ["2022/01/24-de-biao-fan.md", "24日"],
              ],
            },
            {
              title: "2月",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                ["2022/02/04-winter-olympic-games.md", "04日"],
                ["2022/02/04-bugler.md", "04日"],
                ["2022/02/04-commentary.md", "04日"],
                ["2022/02/07-meet-best-friend.md", "07日"],
                ["2022/02/07-waiting-flight.md", "07日"],
                ["2022/02/07-boarding.md", "07日"],
                ["2022/02/08-summarize-the-trip.md", "08日"],
                ["2022/02/08-career-planning.md", "08日"],
                ["2022/02/08-start-working.md", "08日"],
                ["2022/02/13-the-way-to-speak.md", "13日"],
                ["2022/02/21-guangzhou-is-so-cold.md", "21日"],
                ["2022/02/23-the-world-should-not-be-like-this.md", "23日"],
                ["2022/02/23-last-words-in-a-dream.md", "23日"],
                ["2022/02/27-thanks-my-bro.md", "27日"],
              ],
            },
            {
              title: "3月",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                ["2022/03/04-generate-electricity-with-love.md", "04日"],
                ["2022/03/06-swimming.md", "06日"],
                ["2022/03/06-have-a-baby-quickly.md", "06日"],
                ["2022/03/07-disappeared-programmer.md", "07日"],
                ["2022/03/30-query-paper-repetition-rate.md", "30日"],
              ],
            },
          ],
        },
      ],
      "/pages/share/": [
        {
          title: "前端",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            {
              title: "HTML",
              collapsable: true,
              sidebarDepth: 1,
              children: [["html/element.md", "HTML"]],
            },
            {
              title: "CSS",
              collapsable: true,
              sidebarDepth: 1,
              children: [["css/selector.md", "选择器"]],
            },
            {
              title: "Javascript",
              collapsable: true,
              sidebarDepth: 1,
              children: [["javascript/data-type.md", "数据类型"]],
            },
          ],
        },
        // {
        //   title: "node",
        //   collapsable: false,
        //   sidebarDepth: 1,
        //   children: [["share.md", "福利向"]],
        // },
        {
          title: "其他",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ["other/how-to-copy-in-csdn.md", "csdn免登陆破解"],
            ["other/cascade-select-cleanup.md", "级联选择清除"],
            ["other/register-vue-component.md", "全局注册vue组件"],
            ["other/generate-directory-tree.md", "js代码生成结构树"],
            ["other/vue-mobile-org.md", "移动端组织选人组件"],
          ],
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
      emojiCDN:
        "https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets@master/emoji/valine/twemoji/",
      emojiMaps: {
        smile: "twemoji-1.png",
        twemoji1: "twemoji-2.png",
        twemoji2: "twemoji-3.png",
        twemoji3: "twemoji-4.png",
        twemoji4: "twemoji-5.png",
        twemoji5: "twemoji-6.png",
        twemoji6: "twemoji-7.png",
        twemoji7: "twemoji-8.png",
        twemoji8: "twemoji-9.png",
        twemoji9: "twemoji-10.png",
        twemoji10: "twemoji-11.png",
        twemoji11: "twemoji-12.png",
        twemoji12: "twemoji-13.png",
        twemoji13: "twemoji-14.png",
        twemoji14: "twemoji-15.png",
        twemoji15: "twemoji-16.png",
        twemoji16: "twemoji-17.png",
        twemoji17: "twemoji-18.png",
        twemoji18: "twemoji-19.png",
        twemoji19: "twemoji-20.png",
        twemoji20: "twemoji-21.png",
        twemoji21: "twemoji-22.png",
        twemoji22: "twemoji-23.png",
        twemoji23: "twemoji-24.png",
        twemoji24: "twemoji-25.png",
        twemoji25: "twemoji-26.png",
        twemoji26: "twemoji-27.png",
        twemoji27: "twemoji-28.png",
        twemoji28: "twemoji-29.png",
        twemoji29: "twemoji-30.png",
        twemoji30: "twemoji-31.png",
        twemoji31: "twemoji-32.png",
        twemoji32: "twemoji-33.png",
        twemoji33: "twemoji-34.png",
        twemoji34: "twemoji-35.png",
        twemoji35: "twemoji-36.png",
        twemoji36: "twemoji-37.png",
        twemoji37: "twemoji-38.png",
        twemoji38: "twemoji-39.png",
        twemoji39: "twemoji-40.png",
        twemoji40: "twemoji-41.png",
        twemoji41: "twemoji-42.png",
        twemoji42: "twemoji-43.png",
        twemoji43: "twemoji-44.png",
        twemoji44: "twemoji-45.png",
        twemoji45: "twemoji-46.png",
        twemoji46: "twemoji-47.png",
        twemoji47: "twemoji-48.png",
        twemoji48: "twemoji-49.png",
        twemoji49: "twemoji-50.png",
        twemoji50: "twemoji-51.png",
        twemoji51: "twemoji-52.png",
        twemoji52: "twemoji-53.png",
        twemoji53: "twemoji-54.png",
        twemoji54: "twemoji-55.png",
        twemoji55: "twemoji-56.png",
        twemoji56: "twemoji-57.png",
        twemoji57: "twemoji-58.png",
        twemoji58: "twemoji-59.png",
        twemoji59: "twemoji-60.png",
        twemoji60: "twemoji-61.png",
        twemoji61: "twemoji-62.png",
        twemoji62: "twemoji-63.png",
        twemoji63: "twemoji-64.png",
        twemoji64: "twemoji-65.png",
        twemoji65: "twemoji-66.png",
        twemoji66: "twemoji-67.png",
        twemoji67: "twemoji-68.png",
        twemoji68: "twemoji-69.png",
        twemoji69: "twemoji-70.png",
        twemoji70: "twemoji-71.png",
        twemoji71: "twemoji-72.png",
        twemoji72: "twemoji-73.png",
        twemoji73: "twemoji-74.png",
        twemoji74: "twemoji-75.png",
        twemoji75: "twemoji-76.png",
        twemoji76: "twemoji-77.png",
        twemoji77: "twemoji-78.png",
        twemoji78: "twemoji-79.png",
        twemoji79: "twemoji-80.png",
        twemoji80: "twemoji-81.png",
        twemoji81: "twemoji-82.png",
        twemoji82: "twemoji-83.png",
        twemoji83: "twemoji-84.png",
        twemoji84: "twemoji-85.png",
        twemoji85: "twemoji-86.png",
        twemoji86: "twemoji-87.png",
        twemoji87: "twemoji-88.png",
        twemoji88: "twemoji-89.png",
        twemoji89: "twemoji-90.png",
        twemoji90: "twemoji-91.png",
        twemoji91: "twemoji-92.png",
        twemoji92: "twemoji-93.png",
        twemoji93: "twemoji-94.png",
        twemoji94: "twemoji-95.png",
        twemoji95: "twemoji-96.png",
        twemoji96: "twemoji-97.png",
        twemoji97: "twemoji-98.png",
        twemoji98: "twemoji-99.png",
        twemoji99: "twemoji-100.png",
        twemoji100: "twemoji-101.png",
        twemoji101: "twemoji-102.png",
        twemoji102: "twemoji-103.png",
        twemoji103: "twemoji-104.png",
        twemoji104: "twemoji-105.png",
        twemoji105: "twemoji-106.png",
        twemoji106: "twemoji-107.png",
        twemoji107: "twemoji-108.png",
        twemoji108: "twemoji-109.png",
        twemoji109: "twemoji-110.png",
        twemoji110: "twemoji-111.png",
        twemoji111: "twemoji-112.png",
        twemoji112: "twemoji-113.png",
        twemoji113: "twemoji-114.png",
        twemoji114: "twemoji-115.png",
        twemoji115: "twemoji-116.png",
        twemoji116: "twemoji-117.png",
        twemoji117: "twemoji-118.png",
        twemoji118: "twemoji-119.png",
        twemoji119: "twemoji-120.png",
        twemoji120: "twemoji-121.png",
        twemoji121: "twemoji-122.png",
        twemoji122: "twemoji-123.png",
        twemoji123: "twemoji-124.png",
        twemoji124: "twemoji-125.png",
      },
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
