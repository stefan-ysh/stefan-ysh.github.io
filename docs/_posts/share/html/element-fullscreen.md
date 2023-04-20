---
title: js 实现 html 元素全屏展示
date: 2022-05-21 00:00:00
categories: 
  - html
isShowComments: false
permalink: /pages/6152b6/
sidebar: auto
tags: 
  - 
---

## 效果

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /*解决全屏后的背景为黑色问题*/
      /*方法1
          设置容器全屏后的背景色为白色  
      */
      #container:fullscreen {
        background: rgb(58, 53, 53);
        display: flex;
        align-items: center;
        color: aliceblue;
      }
      /*方法2
            设置背景色为白色为白色  
      */
      /*::backdrop {
        background-color: rgb(174, 223, 13);
}*/
      #container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100px;
      }
      #wrap {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        position: relative;
      }
      #area {
        width: 100%;
        height: 100%;
        background: lightblue;
        padding-top: 10px;
      }
      button {
        position: absolute;
        right: 0;
        top: 10px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div id="wrap">
        <textarea id="area" placeholder="Fill the text area please"> </textarea>
        <button id="fullScreenBtn" onclick="fullScreen()">full screen</button>
        <button
          style="display: none"
          id="exitFullScreenBtn"
          onclick="exitFullScreen()"
        >
          exit full screen
        </button>
      </div>
    </div>
  </body>
  <script>
    // 获取全屏按钮和退出全屏按钮
    var fullScreenBtn = document.querySelector("#fullScreenBtn");
    var exitFullScreenBtn = document.querySelector("#exitFullScreenBtn");
    // 获取 需要全屏的 container
    const container = document.getElementById("container");
    // 获取 textarea
    const textarea = document.getElementById("area");
    // 判断是否全屏
    function isFullScreen() {
      return document.fullscreenElement;
    }
    // 全屏
    function fullScreen() {
      if (isFullScreen()) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen();
        textarea.focus();
      }
    }
    // 退出全屏
    function exitFullScreen() {
      if (isFullScreen()) {
        document.exitFullscreen();
      }
    }
    // 监听全屏事件
    document.addEventListener("fullscreenchange", function (e) {
      if (isFullScreen()) {
        fullScreenBtn.style.display = "none";
        exitFullScreenBtn.style.display = "block";
      } else {
        fullScreenBtn.style.display = "block";
        exitFullScreenBtn.style.display = "none";
      }
    });
  </script>
</html>

## 源码

<details>
<summary>点击查看</summary>

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /*解决全屏后的背景为黑色问题*/
      /*方法1
          设置容器全屏后的背景色为白色  
      */
      #container:fullscreen {
        background: rgb(58, 53, 53);
        display: flex;
        align-items: center;
        color: aliceblue;
      }
      #container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100px;
      }
      #wrap {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        position: relative;
      }
      #area {
        width: 100%;
        height: 100%;
        background: lightblue;
        padding-top: 10px;
      }
      button {
        position: absolute;
        right: 0;
        top: 10px;
      }
      /*方法2
            设置背景色为白色为白色  
        */
      /*::backdrop {
        background-color: rgb(174, 223, 13);
}*/
    </style>
  </head>
  <body>
    <div id="container">
      <div id="wrap">
        <textarea id="area" placeholder="Fill the text area please"> </textarea>
        <button id="fullScreenBtn" onclick="fullScreen()">full screen</button>
        <button
          style="display: none"
          id="exitFullScreenBtn"
          onclick="exitFullScreen()"
        >
          exit full screen
        </button>
      </div>
    </div>
  </body>
  <script>
    // 获取全屏按钮和退出全屏按钮
    var fullScreenBtn = document.querySelector("#fullScreenBtn");
    var exitFullScreenBtn = document.querySelector("#exitFullScreenBtn");
    // 获取 需要全屏的 container
    const container = document.getElementById("container");
    // 获取 textarea
    const textarea = document.getElementById("area");
    // 判断是否全屏
    function isFullScreen() {
      return document.fullscreenElement;
    }
    // 全屏
    function fullScreen() {
      if (isFullScreen()) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen();
        textarea.focus();
      }
    }
    // 退出全屏
    function exitFullScreen() {
      if (isFullScreen()) {
        document.exitFullscreen();
      }
    }
    // 监听全屏事件
    document.addEventListener("fullscreenchange", function (e) {
      if (isFullScreen()) {
        fullScreenBtn.style.display = "none";
        exitFullScreenBtn.style.display = "block";
      } else {
        fullScreenBtn.style.display = "block";
        exitFullScreenBtn.style.display = "none";
      }
    });
  </script>
</html>
```

</details>
