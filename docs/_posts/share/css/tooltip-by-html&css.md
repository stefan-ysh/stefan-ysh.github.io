---
title: html + css实现UI框架 tooltip 效果
date: 2022-05-15 00:00:00
categories:
  - html
tags:
  - html
  - css
isShowComments: true
permalink: /pages/1e90f7/
sidebar: auto
---

## 开发说明

在如今的前端开发中，我们经常会使用到 tooltip 来实现鼠标悬停展示信息效果，这个效果可以实现在页面中的任何地方，只要鼠标悬停就会出现一个展示信息的提示框。这在诸多 UI 组件中都有很好的应用，比如：[Antd](https://ant.design/components/tooltip-cn/)、[ElementUI](https://element.eleme.io/#/zh-CN/component/tooltip)等，但这些组件都需要引入对应库才能使用，恰好我最近翻看 MDN 时候发现一个只需要 html 和 css 就能实现 tooltip 效果的方法，完全不需要任何 UI 组件。

## 思路说明

利用 html 的 `data-xxx='xxx'` 设置自定义属性，然后再通过 `:hover` 的时候显示伪元素`:after`，伪元素的内容是通过 `attr()` 函数获取的这个自定义属性的值，这样就实现了 tooltip 的效果。

```html
<div class="wrap" data-title="Welcome to my world">鼠标在此处悬停有惊喜</div>
```

```css
.wrap {
  width: 200px;
  position: relative;
  border: 1px solid rgb(49, 32, 32);
  padding: 10px;
  cursor: pointer;
}
.wrap:hover:after {
  content: attr(data-title);
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
  position: absolute;
  color: rgb(255, 255, 255);
  background: #000;
  top: -50px;
  right: 0px;
}
```

## 技术点

- [data-\*](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*)

> data-\* 全局属性 是一类被称为自定义数据属性的属性，它赋予我们在所有 HTML 元素上嵌入自定义数据属性的能力，并可以通过脚本在 HTML 与 DOM 表现之间进行专有数据的交换。

- [attr()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr)

> CSS 表达式 attr() 用来获取选择到的元素的某一 HTML 属性值，并用于其样式。它也可以用于伪元素，属性值采用伪元素所依附的元素。

## 效果展示

<br>
<br>

  <div class="wrap" data-title="Welcome to my world">
    鼠标在此处悬停有惊喜
</div>
<style>
.wrap {
  width: 200px;
  text-align: center;
  position: relative;
  border: 1px solid rgb(49, 32, 32);
  padding: 10px;
  cursor: pointer;
}
.wrap:hover:after {
  content: attr(data-title);
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
  position: absolute;
  color: rgb(255, 255, 255);
  background: #000;
  top: -50px;
  right: 0px;
}
</style>

<br>

## 说明

示例写的比较粗糙，如果想实现 ui 框架的智能效果，还有很多优化空间，此处暂不做详细修改，如有兴趣可以自行完善。
