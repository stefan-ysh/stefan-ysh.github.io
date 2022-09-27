---
title: 拼音输入过程频繁触发 input 事件的问题解决
date: 2022-05-15 00:00:00
categories: null
sticky: 1
tags:
  - javascript
isShowComments: true
permalink: /pages/eef0d6/
sidebar: auto
---

## 问题描述

:sunny: 示例中需切换中文输入法

<!-- 这样可以直接显示组件内的代码 -->
<!-- <<< @/docs/.vuepress/components/input-request.vue -->

最近在写组件的时候发现一个问题，就是原生输入框在中文状态下输入拼音的时候，会出现频繁触发 input 事件的问题，频繁触发影响性能及网络请求问题，这不是我们想要的结果，我们更想要的是输入的过程中不会触发，而是选定最终汉字之后才会触发 input 事件。如：

我想查找刘德华，拼音需要依次输入`liudehua`8 个拼音字母，只有在我输入完全部拼音并选择目标词的时候才会触发查询事件。

## 问题重现

键盘上的任何字符被按下时都会触发请求

:::demo

```html
<template>
  <div>
    <div class="input-request">
      <div class="input-request__input">
        <label for="ipt">搜索内容</label>
        <input
          name="ipt"
          type="text"
          v-model="value"
          @input="onInput"
          @keyup.enter="onEnter"
        />
        <span>触发了 {{ num }} 次</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "input-request",
    data() {
      return {
        value: "",
        num: 0,
      };
    },

    methods: {
      onInput(e) {
        this.num++;
        console.log("触发了请求");
      },
      onEnter(e) {
        this.num++;
        console.log("触发了请求");
      },
    },
  };
</script>
```

:::

## 期望解决方案

输入完拼音并选择目标词后，才会触发请求
:::demo

```html
<template>
  <div>
    <div class="selected-request">
      <div class="selected-request__input">
        <label for="ipt">搜索内容</label>
        <input
          name="ipt"
          type="text"
          v-model="value"
          @input="onInput"
          @compositionstart="onCompositionStart"
          @compositionend="onCompositionEnd"
        />
        <span>触发了 {{ num }} 次</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "selected-request",
    data() {
      return {
        value: "",
        flag: false,
        num: 0,
      };
    },

    methods: {
      onInput(e) {
        if (this.flag) {
          return;
        }
        this.num++;
        console.log("触发了请求");
      },
      onCompositionStart(e) {
        this.flag = true;
        console.log("输入中...");
      },
      onCompositionEnd(e) {
        this.flag = false;
        console.log("输入结束");
      },
    },
  };
</script>
```

:::

## 技术点

- [compositionstart](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionstart_event)

  > 文本合成系统如 input method editor（即输入法编辑器）开始新的输入合成时会触发 compositionstart 事件。例如，当用户使用拼音输入法开始输入汉字时，这个事件就会被触发。

- [compositionend](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionend_event)
  > 当文本段落的组成完成或取消时, compositionend 事件将被触发 (具有特殊字符的触发, 需要一系列键和其他输入, 如语音识别或移动中的字词建议)。

## 解决思路

当触发 compositionstart 事件时，设置一个标志位，当触发 compositionend 事件时，清除标志位。
