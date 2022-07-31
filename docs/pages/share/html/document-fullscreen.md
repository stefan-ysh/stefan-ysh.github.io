---
title: 文档全屏
date: 2022-05-21
categories:
tags:
# publish: true
isShowComments: false
---
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id onclick="fullScreen()">全屏</button>
    <button onclick="exitFullScreen()">退出全屏</button>
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
