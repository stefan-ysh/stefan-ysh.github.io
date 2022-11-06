---
title: vscode 插件推荐
date: 2022-09-27 23:26:55
permalink: /pages/3816fc/
sidebar: auto
categories:
  - vscode
---

## 🎁 插件推荐

### 1. 打印助手

- 插件名：`[console-helper](https://marketplace.visualstudio.com/items?itemName=AT-9420.console-helper)`
- 功能： 一个帮助开发者更快的输入/移除 console.log 的工具，提供醒目的主题搭配，极大地提高开发效率。
  - 快捷键一键输出 log
  - 支持自定义 log 样式

#### 将选中的变量打印

> 选中变量后按下快捷键，会在代码下方插入一行带颜色的 `console` 语句

快捷方式：

- macOS: `cmd` + `shift` + `l`
- Windows: `ctrl` + `l`

![](https://at529.gitee.io/public-static/static/image/2021-01-27-select-insert.gif#crop=0&crop=0&crop=1&crop=1&id=qjjCu&originHeight=439&originWidth=1000&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

#### 设置

> 快速打开键盘快捷方式(快捷键)

- macOS: `cmd` + `k`, `cmd` + `s`
- Windows: `ctrl` + `k`, `ctrl` + `s`

  > 修改快捷绑定(教程)

- macOS: Code > 首选项 > 键盘快捷方式 > 输入 **consoleLog**，将默认 **cmd + shift + l** 改为习惯的快捷键即可，推荐使用 **cmd + l**。
- Windows: 文件 > 首选项 > 键盘快捷方式 > 输入 **consoleLog**，将默认 **ctrl + l** 改为习惯的快捷键即可。

#### 用法

##### 1. 快捷删除当前页面中所有 log

> 删除页面上所有 `log` ，删除后窗口右下角会提示一共删除了几条 `console.log` 语句

快捷方式：

- macOS: `cmd` + `shift` + `d`
- Windows: `ctrl` + `shift` + `d`

![](https://at529.gitee.io/public-static/static/image/2021-01-27-delete-all-log.gif#crop=0&crop=0&crop=1&crop=1&id=CxCxb&originHeight=436&originWidth=1000&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

##### 2. 代码片段

- `clg` or `log` 输出 `console.log('[ ] >', )`

![](https://at529.gitee.io/public-static/static/image/2021-01-27-snippet-log.gif#crop=0&crop=0&crop=1&crop=1&id=g67bn&originHeight=858&originWidth=992&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

- `clog` 输出 `console.log('%c [ ]: ', 'color: #bf2c9f; background: pink; font-size: 13px;', '')`

![](https://at529.gitee.io/public-static/static/image/2021-01-27-snippet-clog.gif#crop=0&crop=0&crop=1&crop=1&id=OrT2O&originHeight=439&originWidth=1000&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=)

#### QA

为什么我的不生效？

> 亲，可能是您的快捷键被占用了~
> 请打开键盘快捷方式列表，查看您的快捷键是否被占用，删除占用的命令或修改 consoleLog 绑定的快捷键即可，具体的操作如下：

在键盘快捷方式列表，输入被占用的快捷方式例如 **cmd + shift + l** ，右键选择删除或修改其他命令。

### 2. 代码格式化

- 插件名：`[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)`
- 功能：代码美化，自动格式化成规范格式
- 部分规则：

```javascript
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号
  trailingComma: "all",
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: "always",
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: "preserve",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "css",
  // 换行符使用 lf
  endOfLine: "auto",
};
```

- 忽略格式化：

在项目根目录创建一个名为.prettierignore 的文件，在里面配置忽略格式化的文件类型或文件名称
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1662429222323-430f417c-55a5-4ec6-8186-c71fab081014.png#clientId=u98d8ee18-624a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=240&id=ptSpZ&name=image.png&originHeight=240&originWidth=703&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18483&status=done&style=stroke&taskId=u611503e4-9ae8-41d8-b9e0-1d8ca09c388&title=&width=703)

### 3. 分类注释

帮你生成友好的人性化注释，通过这个插件，你可以很好的将你的注释分类:

- `!` : 红色注释，用来标记警告、禁止等一些需要强烈重视情况
- `?` : 蓝色注释，如有存疑内容可通过这种注释来标记
- `//`: 灰色删除线注释，表示删除
- `todo`: 橘红色注释,标记一些待办工作
- `*` : 浅绿色注释，用来高亮显示

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1658221628316-26b33786-e296-462f-8505-e9997daeba1b.png#clientId=ub0f79346-3176-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=185&id=uc2258fb7&name=image.png&originHeight=229&originWidth=856&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52648&status=done&style=stroke&taskId=u8291ba25-55bc-40fb-a6ea-6b8be8166b3&title=&width=691)

#### 配置

打开 vscode ，点击设置，在 settings.json 中配置

`"better-comments.multilineComments": true`
此设置将控制是否使用注释标签设置多行注释的样式。 如果为假,则多行注释将不加修饰地显示

`"better-comments.highlightPlainText": false`
此设置将控制是否使用注释标签设置纯文本文件中的注释的样式,如果设置为 true 则标签 (默认: `! * ? //`) 在当前行第一位的话就会被检测到

`better-comments.tags`
如果你觉得自带的五种高亮注释不好看的话，你也可以自定义，怎么弄呢？
向 settings.jon 中添加如下代码，并按照你的喜好设置颜色、标签、粗体、斜体等样式

```json
"better-comments.tags": [
  {
    "tag": "!",
    "color": "#FF2D00",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "?",
    "color": "#3498DB",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "//",
    "color": "#474747",
    "strikethrough": true,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "todo",
    "color": "#FF8C00",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "*",
    "color": "#98C379",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  }
]
```

#### 自定义注释

如果你非常有个性，是一名时尚的~~弄潮儿~~（码农），想自己添加一种注释，也很简单，照着上面的格式添加一个对象即可，需要自己定义 tag、color 等相关属性。

```json
{
  "tag": "-",
  // 颜色
  "color": "#52asc3",
  // 删除线
  "strikethrough": false,
  // 下划线
  "underline": false,
  // 背景色
  "backgroundColor": "transparent",
  // 粗体
  "bold": false,
  // 斜体
  "italic": false
}
```

### 4. 别名路径跳转

- 插件名：别名路径跳转
- 功能：鼠标移动到路径上，按住`ctrl`并单击就会跳转对应文件

![](https://vscode.lihuiwang.net/%E6%95%88%E6%9E%9C%E5%9B%BE.gif#crop=0&crop=0&crop=1&crop=1&height=754&id=FONDR&originHeight=766&originWidth=1016&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=stroke&title=&width=1000)
![640.gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660443876296-07c78b54-3cd4-4f52-b1c3-3e548d226ad5.gif#clientId=ue6fd52a1-6e4a-4&crop=0.0563&crop=0&crop=1&crop=1&from=drop&height=527&id=Vu242&name=640.gif&originHeight=569&originWidth=1079&originalType=binary&ratio=1&rotation=0&showTitle=false&size=812960&status=done&style=stroke&taskId=uca63df5e-2af7-45d7-b046-e377fbac475&title=&width=1000)

### 5. 彩虹缩进

使缩进更具可读性的简单扩展

- 插件名: indent-rainbow
- 功能：把每一层的缩进都进行颜色区分，使其看起来结构清晰，减少不必要的错误

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660444122191-2c288c42-e449-470f-811f-a0ac6667dea3.png#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=405&id=fJQdd&name=image.png&originHeight=273&originWidth=674&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39166&status=done&style=stroke&taskId=ue3e12e7c-b89f-48a5-8111-c61d0d839be&title=&width=1000)

### ~~6. 括号颜色区分显示~~

⚠️ 此扩展已弃用，因为此功能现在内置于 VS Code

- 插件名: Bracket Pair Colorizer 2
- 功能：给匹配的括号`()` 或者 `{}` 添加对应的颜色用于区分

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660444399954-f7d89e7b-b862-4d5b-8720-8ca2ab4cd544.png#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=190&id=Yg14X&name=image.png&originHeight=119&originWidth=625&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23003&status=done&style=stroke&taskId=u66007a05-e3ff-4e73-8e76-f8a7f34223f&title=&width=1000)

- 注意：目前已经内置于 vscode ，只需配置即可，配置方法，打开设置，输入`@id:editor.bracketPairColorization.enabled @id:editor.guides.bracketPairs`，在对应选项打勾即可

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660528165505-4112c89b-dc7d-4148-94aa-2b7ed989fd19.png#clientId=u241c800f-d372-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=159&id=u782b8b97&name=image.png&originHeight=159&originWidth=1165&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18642&status=done&style=stroke&taskId=u4424e681-affb-44d6-be41-b9f0b9915a2&title=&width=1165)

### 7. 自动重命名标签

- 插件名: Auto Rename Tag
- 功能：自动重命名标签

![640 (1).gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660444482620-b2cf71cc-3562-451b-b376-9e068c31eca6.gif#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=503&id=uad4e2114&name=640%20%281%29.gif&originHeight=537&originWidth=1067&originalType=binary&ratio=1&rotation=0&showTitle=false&size=164935&status=done&style=stroke&taskId=u1959eb9b-bc42-4580-8359-0b2d007bde1&title=&width=1000)

### 8. 代码执行器

- 插件名：[Code Runner](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- 功能：一键执行各种语言代码（常用于测试）

![640 (2).gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660444646938-074aabca-b873-4b47-8967-16acaf3a653e.gif#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=424&id=ua766e28e&name=640%20%282%29.gif&originHeight=458&originWidth=1079&originalType=binary&ratio=1&rotation=0&showTitle=false&size=588965&status=done&style=stroke&taskId=ufdeb66f8-0c45-48f9-9fa6-d103b0e4bda&title=&width=1000)

### 9. Svg 预览

- 插件名：[Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)
- 功能：可以显示你的 SVG 图片，还可以编辑

![640 (3).gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660444778698-4194a220-a31f-4867-ad63-ea5f4644172c.gif#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=560&id=ue4bed68b&name=640%20%283%29.gif&originHeight=604&originWidth=1078&originalType=binary&ratio=1&rotation=0&showTitle=false&size=824057&status=done&style=stroke&taskId=u759d95ed-60f0-4bc6-a2fe-5234792cf17&title=&width=1000)

### 10. 模板字符串转换

- 插件名：[Template String Converter](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter)
- 功能：在字符串中输入$触发，将字符串转换为模板字符串
- 注意：目前不能用于 `*.vue` 文件中

![640 (4).gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660444910242-d0fa94fd-3631-4379-9294-027423febe03.gif#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=207&id=u3942b433&name=640%20%284%29.gif&originHeight=62&originWidth=299&originalType=binary&ratio=1&rotation=0&showTitle=false&size=13745&status=done&style=stroke&taskId=uf6e3b29c-96aa-401c-a007-fa05813ac2c&title=&width=1000)

### 11. 样式颜色预览

- 插件名：[vscode-pigments](https://marketplace.visualstudio.com/items?itemName=jaspernorth.vscode-pigments)
- 功能：实时预览设置的颜色

![Filmage 2022-08-14_105305.gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660445657208-2f390889-4bec-4ca9-8e89-584688a26892.gif#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=0.413&from=drop&height=422&id=u91ace60b&name=Filmage%202022-08-14_105305.gif&originHeight=376&originWidth=890&originalType=binary&ratio=1&rotation=0&showTitle=false&size=469476&status=done&style=stroke&taskId=u448f7136-5088-4cc0-b5ec-df7f75cf255&title=&width=1000)

### 12. 参数提示

- 插件名：[Parameter Hints](https://marketplace.visualstudio.com/items?itemName=DominicVonk.parameter-hints)
- 功能：提示函数的参数类型及回调函数等信息

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660445827033-da8660ab-2012-44e2-9820-2dc0a1e026fb.png#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=578&id=ud8d3c57b&name=image.png&originHeight=423&originWidth=732&originalType=binary&ratio=1&rotation=0&showTitle=false&size=112767&status=done&style=stroke&taskId=u5fd80a77-515d-4cb1-8b62-18bd7cee6ee&title=&width=1000)

### 13. 标签高亮

- 插件名：[Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
- 功能：当光标停留在标签时，高亮匹配的标签

![zIA1XCzK_o.gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660445985114-b7704975-56fa-428b-aa56-c718e67a48f2.gif#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=578&id=u4410b5a2&name=zIA1XCzK_o.gif&originHeight=306&originWidth=529&originalType=binary&ratio=1&rotation=0&showTitle=false&size=280323&status=done&style=stroke&taskId=udca48ba7-4359-43e6-b2d0-46990c1489d&title=&width=1000)

### 14. git 记录查看

- 插件名：`[Gitlens](https://gitlens.amod.io/)`
- 功能：增强了 git 功能，支持在 VSCode 查看作者、修改时间等等

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1660446472297-4aebe2b5-c197-42dc-b9d7-8dd86cdfd6da.png#clientId=ue6fd52a1-6e4a-4&crop=0.0724&crop=0&crop=1&crop=1&from=paste&height=222&id=u0e7076db&name=image.png&originHeight=196&originWidth=818&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27322&status=done&style=stroke&taskId=ua2e65874-d7e6-422b-8d36-220fbbc4516&title=&width=928)

### 15. React 样式助手

- 插件名：[React Style Helper](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-style-helper)
- 功能：在 React 中更快速编写内联样式，并对 CSS、LESS、SASS 等样式文件提供强大的辅助开发功能
  - 自动补全
  - 跳转至样式和变量定义位置
  - 创建 JSX/TSX 的行内样式
  - 预览样式及变量内容
- 行内样式自动补全，同时支持 SASS 变量的跳转及预览。
- 功能预览
  - 根据导入的样式文件，自动补全类名，也可以跳转去修改
  - ![O1CN01fiRbHN1gY7XQOSAlk_!!6000000004153-1-tps-750-545.gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660447287513-3f835b01-c03f-4936-8af8-cf1344d71450.gif#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u84933c26&name=O1CN01fiRbHN1gY7XQOSAlk_%21%216000000004153-1-tps-750-545.gif&originHeight=545&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1054920&status=done&style=stroke&taskId=u66e125f6-980d-4a42-9e8f-4d869194ca4&title=)
- 自动补全行内样式，也可以预览变量或者修改
  - ![O1CN01eK13T81wvy0wwt2v5_!!6000000006371-1-tps-750-546.gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660447316581-012eab8c-9d49-4d69-bbef-7b85b6a59b66.gif#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u88c8e3a8&name=O1CN01eK13T81wvy0wwt2v5_%21%216000000006371-1-tps-750-546.gif&originHeight=546&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1078117&status=done&style=stroke&taskId=ufa43b9f2-dd4d-40ee-a008-3f40946508a&title=)

### 16. 画板作图

- 插件名：[Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- 功能：在 VSCode 中画图，支持多人协作编辑图表等

![640 (5).gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1660448048100-274bb48c-0ac3-4f5e-9e02-fa60900458e0.gif#clientId=ue6fd52a1-6e4a-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=577&id=ueef80537&name=640%20%285%29.gif&originHeight=622&originWidth=1078&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1005017&status=done&style=stroke&taskId=u6a26cfa1-73f5-49fc-89fc-d6174b09353&title=&width=1000)

## 🎈 使用技巧

### 1. 添加右键菜单

#### 1.1 场景描述

当我们想要用 vscode 打开某个文件或者文件夹的时候，只能打开`vscode`之后在通过`文件`-> `打开文件/文件夹`来操作，操作复杂，不方便，如果能对着`目标文件/文件夹`直接右键通过`vscode`打开就好了，下面介绍一种实现的方法。

#### 1.2 设置方式

##### 1.2.1 创建`.txt`文件

桌面新建一个任意名称的`.txt`文件，并复制下列代码贴到`.txt`中

```shell
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Apps\\VSCode\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"D:\\Apps\\VSCode\\Microsoft VS Code\\Code.exe\" \"%1\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Apps\\VSCode\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"D:\\Apps\\VSCode\\Microsoft VS Code\\Code.exe\" \"%V\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="D:\\Apps\\VSCode\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"D:\\Apps\\VSCode\\Microsoft VS Code\\Code.exe\" \"%V\""

```

##### 1.2.2 更改安装路径

更改上述代码中的`D:\\Apps\\VSCode\\Microsoft VS Code\\Code.exe`为你自己的 `vscode` 安装位置路径
**查看安装位置方式**
在 vscode 快捷方式右键，弹出的菜单中，点击属性，会查看到对应目标位置
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661756851649-d8cba0cf-d442-4944-a729-161b50eb2218.png#clientId=uc015ddb7-0af5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=799&id=u79cfb448&name=image.png&originHeight=673&originWidth=421&originalType=binary&ratio=1&rotation=0&showTitle=true&size=25213&status=done&style=stroke&taskId=ud509e161-cfd6-4c53-9160-134434fb945&title=%E6%9F%A5%E7%9C%8B%20VSvode%20%E5%AE%89%E8%A3%85%E4%BD%8D%E7%BD%AE&width=500 "查看 VSvode 安装位置")

##### 1.2.3 更改文件扩展名

更改`.txt`文件为`.reg`文件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661757014534-22228124-2a8c-4e73-bca3-fc501cc39de5.png#clientId=uc015ddb7-0af5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=72&id=u9a3aa9d3&name=image.png&originHeight=72&originWidth=76&originalType=binary&ratio=1&rotation=0&showTitle=true&size=2512&status=done&style=stroke&taskId=u545d74db-22e1-4158-9a72-a1ba8dddb89&title=%E6%9B%B4%E6%94%B9%E6%89%A9%E5%B1%95%E5%89%8D&width=76 "更改扩展前")
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661756964875-2a66a947-abb9-4a07-8214-ae8d471f6565.png#clientId=uc015ddb7-0af5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=72&id=Um5mr&name=image.png&originHeight=72&originWidth=76&originalType=binary&ratio=1&rotation=0&showTitle=true&size=3827&status=done&style=stroke&taskId=uf8da33d9-f7e5-4c0d-a4e4-ff9434b5828&title=%E6%9B%B4%E6%94%B9%E6%89%A9%E5%B1%95%E5%90%8E&width=76 "更改扩展后")

##### 1.2.4 双击文件`.reg`

更改注册表
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661757272712-61a54a86-9adc-4407-8104-d38ca50cf8cc.png#clientId=uc015ddb7-0af5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=186&id=u077a4658&name=image.png&originHeight=173&originWidth=558&originalType=binary&ratio=1&rotation=0&showTitle=true&size=11992&status=done&style=stroke&taskId=u167a9610-d9b0-44fc-ae08-89a779b3281&title=%E6%B7%BB%E5%8A%A0%E6%B3%A8%E5%86%8C%E8%A1%A8&width=600 "添加注册表")
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661757280582-f62c3fe9-5a36-4077-a2ec-a3c6a6bc3cfe.png#clientId=uc015ddb7-0af5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=178&id=ud1d8b5da&name=image.png&originHeight=127&originWidth=429&originalType=binary&ratio=1&rotation=0&showTitle=true&size=7331&status=done&style=stroke&taskId=u3672486b-9c08-470b-a621-24b7e6d1f7c&title=%E6%B7%BB%E5%8A%A0%E6%88%90%E5%8A%9F&width=600 "添加成功")

##### 1.2.5 效果展示

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661757429185-373194a9-a555-4176-a9d3-f8c7ec8be819.png#clientId=uc015ddb7-0af5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=1129&id=ua1e35ea0&name=image.png&originHeight=641&originWidth=284&originalType=binary&ratio=1&rotation=0&showTitle=true&size=29976&status=done&style=stroke&taskId=u09769eb4-5a55-492c-981e-339b0002024&title=%E5%8F%B3%E9%94%AE%E8%8F%9C%E5%8D%95%20Open%20with%20Code%20%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA&width=500 "右键菜单 Open with Code 效果展示")

### 2. 多文件换行选项卡

#### 2.1 场景描述

当我们打开的文件太多时，`vscode`默认为超出滚动，需要靠滚动条才能找到目标文件，查找起来很费时间
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661757813047-8640932e-f7dc-47e0-9b75-6a7c6d0ed151.png#clientId=uc5a7f343-a01c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=181&id=u85a5ab1b&name=image.png&originHeight=187&originWidth=621&originalType=binary&ratio=1&rotation=0&showTitle=true&size=19739&status=done&style=stroke&taskId=u6de1ecee-8415-40d1-a76d-30ec26491d4&title=%E5%A4%9A%E6%96%87%E4%BB%B6%E6%9F%A5%E6%89%BE%E5%A4%8D%E6%9D%82&width=600 "多文件查找复杂")

#### 2.2 设置方式

##### 2.2.1 首选项搜索 wrap tabs

设置首选项中搜索`wrap tabs`并将其勾选，文字解释可知其作用
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661757933057-2560d39f-d823-4cf8-8b34-bb232817f125.png#clientId=uc5a7f343-a01c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=226&id=CouIU&name=image.png&originHeight=301&originWidth=799&originalType=binary&ratio=1&rotation=0&showTitle=true&size=34320&status=done&style=stroke&taskId=u54485ca3-65c8-4b48-aa1f-9a3463b54d8&title=%E8%AE%BE%E7%BD%AE%20wrap%20tabs&width=600 "设置 wrap tabs")

##### 2.2.2 效果展示

文件超出可用空间时，将自动折叠，一目了然，大大减少查看时间
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661757892230-3139b7a4-842e-4523-a687-52232e893ae2.png#clientId=uc5a7f343-a01c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=250&id=u8481374e&name=image.png&originHeight=301&originWidth=722&originalType=binary&ratio=1&rotation=0&showTitle=true&size=34694&status=done&style=stroke&taskId=u7f2f80dd-d109-449f-a656-16e13caab1f&title=%E6%96%87%E4%BB%B6%E9%80%89%E9%A1%B9%E5%8D%A1%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA&width=600 "文件选项卡效果展示")

### 3. 吸顶滚动

#### 3.1 场景描述

当函数或对象嵌套多的时候，查找起来很容易混淆，常常忘记当前是哪一层级，又需要从头开始查找，如：

```javascript
const configure = {
  props: [
    {
      name: "componentProps",
      title: "组件配置",
      extraProps: {
        display: "accordion",
        defaultCollapsed: true,
      },
      type: "group",
      items: [
        {
          title: {
            label: {
              type: "i18n",
              "en-US": "size",
              "zh-CN": "尺寸",
            },
          },
          name: "size",
          setter: {
            componentName: "RadioGroupSetter",
            props: {
              options: [
                {
                  label: "large",
                  value: "large",
                },
                {
                  label: "medium",
                  value: "medium",
                },
                {
                  label: "small",
                  value: "small",
                },
              ],
            },
            initialValue: "medium",
          },
        },
      ],
    },
  ],
};
```

本设置就可以解决这种问题，使层级清晰，避免报错

#### 3.2 设置方式

##### 3.2.1 找到吸顶设置项

打开`vscode`设置，搜索`sticky`，找到该设置，如图：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1662434455241-7c6cf43a-62f1-490f-9008-a1aae4aa06ed.png#clientId=u5f4adc11-b3ed-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=218&id=u0d32ce14&name=image.png&originHeight=345&originWidth=950&originalType=binary&ratio=1&rotation=0&showTitle=true&size=25650&status=done&style=stroke&taskId=ud1de5d4a-1f30-41e2-980a-9ff1a1d575e&title=%E5%90%B8%E9%A1%B6%E6%BB%9A%E5%8A%A8%E5%AE%9E%E8%AE%BE%E7%BD%AE%E6%96%B9%E5%BC%8F&width=600 "吸顶滚动实设置方式")

##### 3.2.2 设置说明

上图中，`**1**`为`搜索关键字`，`**2**`为开启/关闭`吸顶设置`，`**3**`为设置`吸顶最大行数`

##### 2.2.3 效果展示

![stickym vscode.gif](https://cdn.nlark.com/yuque/0/2022/gif/244005/1662432119281-1b6c1967-d65b-484a-9d5f-06068d671b71.gif#clientId=uf137944d-8448-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u9516e67f&name=stickym%20vscode.gif&originHeight=873&originWidth=871&originalType=binary&ratio=1&rotation=0&showTitle=true&size=355573&status=done&style=stroke&taskId=uee32dfc7-39e7-49e0-a0cd-e4d3f7195f2&title=%E5%90%B8%E9%A1%B6%E6%BB%9A%E5%8A%A8%E6%95%88%E6%9E%9C "吸顶滚动效果")

### 4. 切换终端类型

#### 4.1 场景描述

有时候，个别项目需要在指定的环境下运行，以保证其最佳性能，例如`linux`等，但是单独打开电脑自带终端的操作又非常麻烦，这时可以借助 vscode 的切换终端类型的功能

#### 4.2 设置方法

##### 4.2.1 打开终端

项目目录中，右键打开`在终端中打开`菜单，或者快捷键`Crtl + ``唤出终端面板
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1662433847994-378193a1-2d9f-42de-98e9-fb7b78247164.png#clientId=u39a86ecb-2f9c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=842&id=u41030c91&name=image.png&originHeight=414&originWidth=295&originalType=binary&ratio=1&rotation=0&showTitle=true&size=19015&status=done&style=stroke&taskId=u8ebbb5f9-97e5-468d-a496-af8637286f6&title=%E6%89%93%E5%BC%80%E7%BB%88%E7%AB%AF%E8%8F%9C%E5%8D%95&width=600 "打开终端菜单")

##### 4.2.2 切换终端类型

在终端面板上点击右上角的下拉箭头，选择对应的终端类型
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1662434002663-ea1a4786-e165-425d-a414-1744b651a0da.png#clientId=u39a86ecb-2f9c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=756&id=uc761c02b&name=image.png&originHeight=266&originWidth=211&originalType=binary&ratio=1&rotation=0&showTitle=true&size=10806&status=done&style=stroke&taskId=u458792d9-4bb4-43d2-987b-1b934e2c12a&title=%E5%88%87%E6%8D%A2%E7%BB%88%E7%AB%AF%E7%B1%BB%E5%9E%8B&width=600 "切换终端类型")

##### 4.2.3 效果展示

![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1662434058346-0dd2e157-8de9-469a-a1e2-3d0264480de7.png#clientId=u39a86ecb-2f9c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=162&id=u28ae84dc&name=image.png&originHeight=164&originWidth=607&originalType=binary&ratio=1&rotation=0&showTitle=true&size=4522&status=done&style=stroke&taskId=u491ca36d-0cb0-4482-874a-f470828e871&title=%E5%88%87%E6%8D%A2%E7%BB%88%E7%AB%AF%E7%B1%BB%E5%9E%8B%E4%B8%BA%20linux&width=600 "切换终端类型为 linux")

## ❔ 常见问题

### 1. 打开`vscode`自动显示`cli.js`

**问题描述：**打开 vscode 自动显示一个叫 clis.js 的文件，如图：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661738599319-bcbb4aa2-10b5-4b3a-9746-472d00531b3c.png#clientId=udd9b79ce-447a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=164&id=u0c3ddead&name=image.png&originHeight=164&originWidth=846&originalType=binary&ratio=1&rotation=0&showTitle=true&size=19311&status=done&style=stroke&taskId=uc8b60619-3875-4edd-883f-f8116cd9e88&title=cli.js%20%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9&width=846 "cli.js 文件内容")
**原因分析：**

- 官网解释
- 总结：vscode 设置了以管理员打开导致的

**解决方案：**关闭`以管理员身份运行此此程序`选项
![image.png](https://cdn.nlark.com/yuque/0/2022/png/244005/1661739092929-bdf03ca9-810d-41bb-931a-0f683419a9dd.png#clientId=udd9b79ce-447a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=673&id=u73efddd8&name=image.png&originHeight=673&originWidth=470&originalType=binary&ratio=1&rotation=0&showTitle=true&size=35568&status=done&style=stroke&taskId=u84766654-543b-4d42-806f-2f4f7b84a0c&title=%E8%AE%BE%E7%BD%AE%20vscode%20%E5%85%BC%E5%AE%B9%E6%80%A7&width=470 "设置 vscode 兼容性")
