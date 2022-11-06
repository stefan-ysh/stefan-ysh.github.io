---
title: js 实现页面全屏
date: 2022-05-21 00:00:00
categories:
  - html
# tags:
#   - html
isShowComments: false
permalink: /pages/a06fdc/
sidebar: auto
---
## 效果

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>页面全屏</title>
    <style>
      button {
        height: 50px;
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <button id onclick="fullScreen()">fullscreen</button>
    <button onclick="exitFullScreen()">exit fullscreen</button>
  </body>
  <script>
    // 全屏
    function fullScreen() {
      var docElm = document.documentElement;
      //W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }
      //FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }
      //Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }
      //IE11
      else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
    // 退出全屏
    function exitFullScreen() {
      //W3C
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      //FireFox
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
      //Chrome等
      else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
      //IE11
      else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
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
    <title>页面全屏</title>
    <style>
      button {
        height: 50px;
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <button id onclick="fullScreen()">fullscreen</button>
    <button onclick="exitFullScreen()">exit fullscreen</button>
  </body>
  <script>
    // 全屏
    function fullScreen() {
      var docElm = document.documentElement;
      //W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }
      //FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }
      //Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }
      //IE11
      else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
    // 退出全屏
    function exitFullScreen() {
      //W3C
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      //FireFox
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
      //Chrome等
      else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
      //IE11
      else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  </script>
</html>
```

</details>

## 注意

如果是作为`iframe`嵌入到项目中，需要在`iframe`上设置`allowfullscreen`属性

```html
<iframe allowfullscreen />
```

## 参考

[iframe allowfullscreen](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe#attr-allowfullscreen)
