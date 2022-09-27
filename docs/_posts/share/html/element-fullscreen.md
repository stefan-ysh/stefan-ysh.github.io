---
title: 元素全屏
date: 2022-05-21 00:00:00
categories: null
tags: null
isShowComments: false
permalink: /pages/6152b6/
sidebar: auto
---
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* 解决全屏后的北京为黑色问题 */
      /* 方法1 
          设置容器全屏后的北京色为白色  
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
        height: 200px;
      }
      #wrap {
        width: 90%;
        height: 90%;
        margin: 0 auto;
        position: relative;
      }
      #area {
        width: 100%;
        height: 100%;
        /* margin: 0 auto; */
      }
      button {
        position: absolute;
        right: 0;
        top: 0;
      }
      /* 方法2 
            设置北京色为白色为白色  
        */
      /* ::backdrop {
        background-color: rgb(174, 223, 13);
      } */
    </style>
  </head>
  <body>
    <div id="container">
      <h2>Fill the text area please</h2>
      <div id="wrap">
        <textarea id="area"> </textarea>
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