---
title: 利用 style 标签实现 css 样式编写过程可视化
date: 2022-10-30 13:55:48
permalink: /pages/55bc17/
sidebar: auto
categories: 
  - css
  - javascript
tags: 
  - 
---

## 描述

在推上看到一个博主分享了`style`标签也可以当成元素来使用的视频，感觉这个思路挺新鲜，转而联想到是不是可以做一个样式编写过程可视化的功能，也就是所说的所见即所得。

## 演示

之前看到有些博客首页就会显示一边写样式，一边呈现效果的案例，想着可以用这个方法试一下，下面是我写的 `Demo`。

<html lang="en">
<head>
<style>
    #container {
 display: flex;
 align-items: center;
 height: 200px;
}
    #style-block {
 width: 400px;
 max-height: 200px;
 display: block;
 font-family: monospace;
 font-size: 15px;
 line-height: 40px;
 background: #212327;
 color: white;
 overflow: scroll;
 margin-right: 10px;
}
</style>
</head>
<body>
 <div id="container">
 <style id="style-block"></style>
 <div class="factory">
  <div class="crate"></div>
  <div class="belt b1"></div>
  <div class="belt b2"></div>
  <div class="motor m1"></div>
  <div class="motor m2"></div>
 </div>
</div>
</body>
<script>
function renderFun(el, styleStr) {
  let i = 0;
  const timer = setInterval(() => {
    const str = `${styleStr.substr(0, i)}`;
    if (i === styleStr.length - 1) {
      el.style.display = 'none';
      return clearInterval(timer);
    }
    el.innerText = str;
    i++;
    el.scrollBy({
      left: 0,
      top: 1000,
      behavior: 'smooth',
    });
  }, 90);
}
const styleStr = `.factory {
  position: relative;
}
.crate {
  position: absolute;  
  background: #b08f7c;
  width: 55px;
  height: 56px;
  border: 1px solid #2092d1;
  animation: crate 10s linear infinite;
}
.belt {
  position: absolute;
  width: 300px;  
  border: 1px dashed #60b0ff;  
}
.b1 {
  top: 0;
  animation: moveBeltLR .15s linear infinite;
}
.b2 {
  top: 58px;  
  animation: moveBeltRL .15s linear infinite;
}
.motor {  
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #60b0ff;
  animation: spinMotor 2.2s linear infinite;
}
.motor:before {
  content: '';
  position: absolute;
  top: 24px;
  left: 15px;
  width: 20px;
  height: 2px;  
  display:block;
  background: #60b0ff;
  border-radius: 5px;
}
.motor:after {
  content: '';
  position: absolute;
  top: 15px;
  left: 24px;
  width: 2px;
  height: 20px;  
  display:block;
  border-radius: 5px;
  background: #60b0ff;
}
.m1 {
  left: 10px;  
}
.m2 {
  left: 310px;  
}
@keyframes moveBeltLR {
  from {
    left: 35px;
  }
  to {
    left: 40px;
  }
}
@keyframes moveBeltRL {
  from {
    left: 40px;
  }
  to {
    left: 35px;
  }
}
@keyframes spinMotor {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes crate {
  0% {
    bottom:20px;
    left: 40px;
    transform: rotate(0deg);
    opacity:0;
  }
  3% {
    bottom:0px;
    left: 40px;
    transform: rotate(0deg);
    opacity:0.5;
  }
  5% {
    bottom:0px;
    left: 50px;
    transform: rotate(0deg);
      opacity:1;
  }
  15% {
    bottom:0px;
    left: 80px;
    transform: rotate(0deg);
      opacity:1;
  }
  25% {
    bottom:0px;
    left: 100px;
    transform: rotate(0deg);
      opacity:1;
  }
  90%  {
    bottom:0px;
    left: 320px;
    transform: rotate(0deg);
  }
  92%  {
    bottom:-10px;
    left: 340px;
    transform: rotate(45deg);
  }
  95% {
    bottom:-50px;
    left: 380px;
    transform: rotate(90deg);
    opacity:1;
  }
  100% {
    bottom:-50px;
    left: 380px;
    transform: rotate(90deg);
    opacity:0;
  }
}`;
renderFun(document.getElementById('style-block'), styleStr);

</script>
</html>

## 待办

- 样式代码换行

## 附录

- [视频地址](https://twitter.com/wesbos/status/1586360039174209536?s=20&t=ilkYTDynUExMijw2jGAYkg)
- [Demo Link](https://codepen.io/stefan_ysh/pen/PoaPWJe)
