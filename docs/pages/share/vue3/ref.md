---
title: vue3 学习之响应式数据
date: 2022-05-21
categories:
tags:
# publish: true
isShowComments: false
---

## 前言

记录自己学习 vue3 的过程，以及学习 vue3 的知识点。vue3 的响应式数据声明方式有所改变，需要用到 ref 、reactive 等。

## 知识点

- ref 声明基本类型响应式数据，如字符串、数字、布尔值等，如果绑定了复杂类型数据，源码中实际上也是调用 reactive 的，所以不建议在此处绑定复杂数据类型。
- reactive 声明复杂类型响应式数据，如对象、数组等。
- shallowReactive：只处理对象最外层属性的响应式（浅响应式）。

- shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。

> shallowReactive、shallowRef 什么时候使用?

    如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。

    如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。

> shallowReactive、shallowRef 怎么更新数据?

- 更新整个数据

  ```js
  let message = shallowRef({ time: "" });
  const handleClick = () => {
    message.value = { time: new Date().toLocaleTimeString() };
  };
  ```

- 解决方法：triggerRef 强制触发 ref，进行更新

  ```js
  let message = shallowRef({ time: "" });
  const handleClick = () => {
    message.value.time = new Date().toLocaleTimeString();
    triggerRef(message);
  };
  ```

- 方法中存在 ref 的值更新时候 会一并触发 ref,跟 triggerRef 原理相同 触发同一函数

  ```js
  let message = shallowRef({ time: "" });
  const handleClick = () => {
    message.value.time = new Date().toLocaleTimeString();
    triggerRef(message);
  };
  ```

- triggerRef 强制触发 ref

  ```html
  <template>
    <h2>Ref</h2>
    <div>{{ message }}</div>
    <button ref="btn" @click="handleClick">Button</button>
  </template>

  <script setup lang="ts">
    // ref 响应式数据
    // shallowRef 只能设置一次
    // triggerRef 强制触发 ref

    import { ref, shallowRef, triggerRef } from "vue";

    // 1、响应式数据
    // 1.1 ref 响应式数据
    let message = ref({ time: "" });
    const handleClick = () => {
      message.value.time = new Date().toLocaleTimeString();
    };

    // 1.2 浅响应式数据，只能设置一层数据，不能设置多层数据
    // 1.2.1 解决方法：
    // 更新整个数据
    // let message = shallowRef({ time: "" });
    // const handleClick = () => {
    //   message.value = { time: new Date().toLocaleTimeString() };
    // };

    // 1.2.2 解决方法：
    // triggerRef 强制触发 ref，进行更新
    // let message = shallowRef({ time: "" });
    // const handleClick = () => {
    //   message.value.time = new Date().toLocaleTimeString();
    //   triggerRef(message);
    // };

    // 1.2.3 解决方法：
    // 方法中存在 ref 的值更新时候 会一并触发 ref
    // 跟 triggerRef 原理相同 触发同一函数
    // let message = shallowRef({ time: "" });
    // const handleClick = () => {
    //   message.value.time = new Date().toLocaleTimeString();
    //   triggerRef(message);
    // };
  </script>
  ```
