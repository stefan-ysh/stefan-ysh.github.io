---
title: 利用js代码生成目录结构树
date: 2022-01-19 00:00:00
categories: 
  - node
isShowComments: true
permalink: /pages/fa4c16/
sidebar: auto
tags: 
  - 
---

## 说明

常常在写 `markdown` 文档的时候，需要对一些项目的目录结构进行描述，但每次都是复制别人的目录文本进行更改，后来找了一下，虽然有一些 `npm` 包可以解决，但确实不想因为这个再多下载一个包，于是就想着自己写一写，这就是本仓库诞生的原因.

## 用法

1. 点击 [Github](https://github.com/stefan-ysh/build-directory-tree.git) 或命令行执行以下命令将仓库克隆到本地

```
git clone https://github.com/stefan-ysh/build-directory-tree.git
```

2. 将 `index.js` 文件放到想生成目录结构的目录下，打开终端控制台执行 `node index.js` 即可生成，并会自动写入 `directoryTree.md` 文件中，同时，终端控制台会显示执行进度、目录结构及文件数量统计

```
node index.js
```

```
folder: 7
file: 6
md 格式文件: 1 份
js 格式文件: 3 份
json 格式文件: 1 份
html 格式文件: 1 份
The directory tree was built successfully!!
Total time: 5.58ms
```

## 特点

- 原生 js 实现，不依赖任何插件
- 智能忽略 `node_modules` 文件夹
- 附带目录统计功能
- 后期考虑做成 vscode 插件

## 示例

```
root
├─server
│ ├─config
│ ├─logs
│ ├─models
│ ├─public
│ ├─routes
│ │ └─index.js
│ └─app.js
├─web
│ └─index.html
├─directoryTree.md
├─index.js
└─package.json
```
