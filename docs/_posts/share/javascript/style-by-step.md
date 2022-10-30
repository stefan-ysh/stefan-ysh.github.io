---
title: style-by-step
date: 2022-10-30 13:55:48
permalink: /pages/55bc17/
sidebar: auto
categories:
  - css
  - javascript
---

## 描述

在推上看到一个博主分享了`style`标签也可以当成元素开使用的视频，联想到是不是可以做一个样式编写效果立现的功能，就是所说的所见即所得。

> [视频地址](https://twitter.com/wesbos/status/1586360039174209536?s=20&t=ilkYTDynUExMijw2jGAYkg)

## 演示

看完博主的演示，我直接就想到了之前看到的一些网站实现样式编写可视化，想着可以试一下，下面是写的demo。
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
 let idx = 1;
 const timer = setInterval(() => {
  const str = styleStr[idx];
  if (idx === styleStr.length - 1) {
   el.style.display = "none";
   return clearInterval(timer);
  }
  if ([";", "{", "}"].includes(str)) {
   el.innerHTML += `${str}`;
  } else {
   el.innerHTML += str;
  }
  idx++;
  el.scrollBy({
   left: 0,
   top: 200,
   behavior: "smooth"
  });
 }, 20);
}
const styleStr = `
body{
//  background: #353437;
}
.factory{
  position: relative;
}
.crate{
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
.b1{
  top: 0;
  animation: moveBeltLR .15s linear infinite;
}
.b2{
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
.motor:before{
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
.m1{
  left: 10px;  
}
.m2{
  left: 310px;  
}
@keyframes moveBeltLR {
  from {left: 35px;}
  to   {left: 40px;}
}
@keyframes moveBeltRL {
  from {left: 40px;}
  to   {left: 35px;}
}
@keyframes spinMotor {
  from {transform: rotate(0deg);}
  to   {transform: rotate(360deg);}
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
renderFun(document.getElementById("style-block"), styleStr);
</script>
</html>

## 总结

未完成样式代码换行，后续想到方案继续完善
