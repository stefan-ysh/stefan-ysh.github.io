---
title: csdn免登录复制及剪贴板净化
date: 2022-01-19
categories:
tags:
# publish: true
isShowComments: true
---

## 背景描述

我们在百度搜索问题的时候，特别是IT相关的问题，如果不做限制，多数情况下都会点进CSDN这个网站，（虽然充斥着各种搬运合广告，但是不可否认的是用户基数确实大）这时候就会出现一些问题，比如需要登陆才能复制代码块，等你登陆并复制之后，等到粘贴的时候发现代码段后缀增加了该文章的链接等无用信息，这种情况下非常苦恼，如图

- 需登录才能复制（这段代码是模拟代码，你可以尝试复制这段代码）

<pre style="user-select:none;">
    <code>
    {
      content: [
        {
          id: '001',
          name: 'Stefan',
        },
        {
          id: '002',
          name: 'Brown',
        },
        {
          id: '003',
          name: 'Tina',
        },
      ],
      total: 3,
      code: 200,
      msg: '成功'
    };
    </code>
</pre>
- 复制的代码片段粘贴的时候会出现广告后缀

```javascript

{
  content: [
    {
      id: '001',
      name: 'Stefan',
    },
    {
      id: '002',
      name: 'Brown',
    },
    {
      id: '003',
      name: 'Tina',
    },
  ],
  total: 3,
  code: 200,
  msg: '成功'
};
————————————————
版权声明：本文为CSDN博主「xxxxxx」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xxxxxxxx/article/details/xxxxxxxx
```

## 原因分析

打开浏览器控制台查看元素得知，之所以无法复制，是因为内容的包裹元素上多了一个样式[`user-select:none`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/user-select), 了解后追到，该样式是控制用户能否选中文本的。

<img src='/share/other/how-to-copy-in-csdn/1.jpg' align='center' style='width:100%;height:100%;box-shadow:1px 1px 5px pink;'/>

## 解决方案

### 免登录复制

既然原因找到了，那我们来验证一下，当我们把 `none` 改为 `text`，神奇的事情发生了，虽然还是提示`登录后复制`，但细心的你可能已经发现此时左侧已经可以选定内容了！

<img src='/share/other/how-to-copy-in-csdn/2.jpg' align='center' style='width:100%;height:100%;box-shadow:1px 1px 5px pink;'/>

此时我们粘贴到控制台看一下效果，发现粘贴也成功了，按理说现在已经算是解决了问题，但是作为一向追求完美（懒）的我来说，这还远远不够，毕竟复制完再删除下面三行的操作真的很傻。

<img <img src='/share/other/how-to-copy-in-csdn/3.jpg'  align='center' style='width:100%;height:100%;box-shadow:1px 1px 5px pink;'/>

### 剪贴板净化

> 此举并无过河拆桥及无视版权之意，我对原创作者始终保有敬意及感恩之心，同时我也是一名创作者，所以每次查询到的方案解决了问题，我也会点赞评论，转载也会附上原文链接，只是复制内容的后缀实非我之所需，所以才会出此下策。

这涉及到浏览器的复制功能，CSDN 会通过浏览器的默认复制功能来将后缀塞进去，所以针对这一原因，解决方法是：

1. 取消浏览器的默认复制事件
2. 通过 [window.getSelection()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection) api来获得页面中当前被选取到的内容
3. 将步骤 2 获取到的内容通过 clipboardData.setData() api设置到到剪切板中

```javascript
document.addEventListener('copy', function (e) {
  // step 1
  // 阻止默认事件：就是阻止Ctrl + C 或 鼠标右键复制的默认事件
  // 因为如果使用默认事件，csdn 就会通过这个渠道向复制到的内容里面塞进去最后三行
  e.preventDefault(); 
  // step 2
  // 此处需要对数据进行一些处理
  var textArr = window.getSelection().toString().split('\t');
  var pasteText = '';
  textArr.forEach(function (e) {
    pasteText += e;
  });
  // step 3
  // 此步骤完成后，所选择的内容就已经存到剪切板中了，到指定位置或者IDE直接粘贴即可
  e.clipboardData.setData('text', pasteText);
});
```

### 实施方式

- 通过控制台输入代码（操作较繁琐，不推荐，不做介绍）

- 利用浏览器标签制作按钮实现一键破解，操作方便，推荐，下面详细介绍

1. 将下列代码复制

```javascript
javascript:document.addEventListener('copy',function(e){e.preventDefault();var textArr=window.getSelection().toString().split('\t');var pasteText='';textArr.forEach(function(e){pasteText+=e;});e.clipboardData.setData('text',pasteText);console.log('Clipboard has been purged successfully,the content is as follows：\n\n'+pasteText)});var preElement=document.getElementsByTagName('pre');var codeElement=document.getElementsByTagName('code');console.clear();console.log(`%c ${preElement.length} pre element${preElement.length>1?'s':''} and ${codeElement.length} code element${codeElement.length>1?'s':''} were found in total.`,"color:red;font-weight:bold;font-size:15px;");console.time("Elapsed time: ");for(let i=0;i<=preElement.length-1;i++){preElement[i].style.userSelect='text';console.log(`%c ${i+1}/${preElement.length} pre has been successfully cracked!`,"color:green;font-size:15px;");}for(let i=0;i<=codeElement.length-1;i++){codeElement[i].style.userSelect='text';console.log(`%c ${i+1}/${codeElement.length} code has been successfully cracked!`,"color:blue;font-size:15px;");}console.timeEnd("Elapsed time: ");
```
