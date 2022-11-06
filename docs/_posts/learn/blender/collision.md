---
title: blender 布料碰撞圆球效果
date: 2022-11-05 23:59:31
permalink: /pages/cf36af/
sidebar: auto
categories:
  - blender
---

## 成品展示

<div align="center">
    <img width="80%" src="../../../.vuepress/public/post/learn/blender/collision/demo.gif" />
</div>

## 添加球体

1. 左上角 > 添加物体(`Shift + A`) > 经纬球
2. 按`S`键进行缩放至合适大小

<div align="center">
<img width="50%" src="../../../.vuepress/public/post/learn/blender/collision/1.png" />
</div>
3. 在右侧点击物理属性面板设置为布料
<div align="center">
<img width="50%" src="../../../.vuepress/public/post/learn/blender/collision/4.png" />
</div>

## 添加布料

- 左上角 > 添加物体 > 平面 按`S`键进行缩放至合适大小，按`G`键将布料移至球体上方
- 现在的平面，可以理解为，相当于一块坚硬的钢板，即使碰到障碍物也不会变形，那么，我们需要对齐进行切分，让其变成由很多个小小格子拼接而成，这样才能达到布料的效果
  1. 选中平面，按`tab`键进入编辑模式
  2. 对准平面点击右键，选择细分，细分越多，渲染需要的时间就越长，可根据实际情况进行细分
  <div align="center">
  <img width="50%" src="../../../.vuepress/public/post/learn/blender/collision/2.png" />
  </div>
  <div align="center">
  <img width="50%" src="../../../.vuepress/public/post/learn/blender/collision/3.png" />
  </div>

1. 在右侧点击物理属性面板设置为碰撞

<div align="center">
   <img width="50%" src="../../../.vuepress/public/post/learn/blender/collision/5.png" />
</div>

## 播放动画

点击下方的播放按钮即可预览整体效果
<div align="center">
   <img  src="../../../.vuepress/public/post/learn/blender/collision/6.png" />
</div>
