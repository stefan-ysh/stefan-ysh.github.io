---
title: Fusion 组件下拉菜单插槽按钮点击无反应
date: 2022-10-25 23:42:51
permalink: /pages/01eab2/
sidebar: auto
categories: 
  - css
tags: 
  - 
---

## 问题描述

前端开发中，`UI`框架可以快速实践，大大提高了工作效率，但有时候并不能完全符合我们的原型，这就需要我们对`UI`组件进行改造，今天讨论的是在下拉菜单中自定义按钮，但是调试中发现，点击时存在一定几率无法触发事件，经过排查，发现最后的原因很简单，但却困扰了我一下午，因为之前代码是其他同事写的，所以我有重新顺了以下思路，终于找到了原因。

- 出错代码

```html
<Dropdown>
  <Menu>
   <Menu.Item>
     <Button onClick={() => handleClick(item)}>查看</Button>
   </Menu.Item>
  </Menu>
</Dropdown>
```

## 原因分析

通过观察，并不是事件无效，而是点击范围过小，仅限文字内容大小左右的范围才可触发，查看元素发现，因为 `menuItem` 实际上默认只接受文本，所以即时你放进去一个按钮，它也会用一个 `span` 标签将其包住，导致按钮样式无法生效。

```html
<div class="next-menu-item-inner">
  <span class="next-menu-item-text">
    <button
      type="button"
      class="next-btn next-medium next-btn-normal next-btn-text"
    >
      <span class="next-btn-helper">查看</span>
    </button>
  </span>
</div>
```

## 解决方案

知道了原因，就很好解决了，分别从两个层面入手，一是通过样式将按钮可点击面积扩大，二是直接将事件移至 `menuitem` 上。

1. 通过样式扩大点击范围

```html
<Dropdown>
  <Menu>
   <Menu.Item>
     <Button className="dropdown-btn" onClick={() => handleClick(item)}>查看</Button>
   </Menu.Item>
  </Menu>
</Dropdown>

<style>

.dropdown-btn {
  position: absolute;
  inset: 0;
  height: 100% !important;
}

</style>
```

2. 将点击事件移至 `<Menu.Item>`

同时将按钮更改为文本，因为不再需要他的点击事件了

```html
<Dropdown>
  <Menu>
   <Menu.Item onClick={() => handleClick(item)}>
     <span>查看</span>
   </Menu.Item>
  </Menu>
</Dropdown>
```

## 注意事项

样式覆盖类名切记做好隔离，避免与其他组件样式污染

## 小结

开发中要养成自测的习惯，特别多人协作时，要避免问题污染
