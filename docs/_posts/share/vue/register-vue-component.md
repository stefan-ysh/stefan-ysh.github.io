---
title: vue 一次性全局注册自定义组件
date: 2022-03-08 00:00:00
isShowComments: true
permalink: /pages/a27fbb/
sidebar: auto
categories: 
  - vue
tags: 
  - 
---

## 目录结构

```
root
│-src
│   └─components
│        ├─ menu.vue
│        ├─ left-sider.vue
│        └─ registerComponents.js
└────main.js
```

## 注册组件

- 首先动态注册该目录下的所有.vue 文件

```javascript
// registerComponents.js
import Vue from "vue";
// 导入所有自定义组件
// 核心方法 require.context(a, b, c)

/*
 * @param a 组件所在文件夹
 * @param b 是否遍历子文件夹
 * @param c 文件格式/后缀
 */

let cpt = require.context(".", true, /\.vue$/);
cpt.keys().forEach((fileName) => {
  const config = cpt(fileName);
  // ./cpt.vue => cpt 去后缀
  const componentName = fileName.replace(/^\.\//, "").replace(/\.\w+$/, "");
  // 查找分隔符 '/'
  const separator = componentName.lastIndexOf("/");
  // 截取文件名
  const finalCptName = componentName.slice(separator + 1);
  // 动态注册该目录下的所有.vue文件
  Vue.component(finalCptName, config.default || config);
});
```

## 引入注册组件

- 在入口文件 main.js 中导入注册组件文件

```javascript
// main.js
import "@/components/custom-components/registerComponents.js";
```

## 模板中使用

```html
<-- index.vue-->
<template>
  <div class="container">
    <--组件名就是上面注册文件(registerComponents.js) 中的 finalCptName-->
    <left-sider></left-sider>
    <menu></menu>
  </div>
</template>
```
