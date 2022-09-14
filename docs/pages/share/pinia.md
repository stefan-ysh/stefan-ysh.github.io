---
title: Pinia
date: 2022-09-11
categories:
tags:
# publish: true
isShowComments: false
---

## 简介

`Pinia` 是一款功能于 vuex 相同的状态管理工具，由 `vue` 核心团队成员开发，搭配 `vue3`

## 使用方法

### 安装

```shell
npm install pinia -S
```

## 引入及挂载

```ts
// main.ts
// 引入创建 pinia 的构造函数
import { createPinia } from "pinia";
// 创建 pinia 实例
const pinia = createPinia();
// 挂载 pinia
app.use(pinia);
```

## 编写`store`文件

### state

- 定义

```ts
// src/stores/counter.ts;
// 创建 store
import { defineStore } from "pinia";
// Store 是使用 defineStore() 定义的，并且它需要一个唯一名称，作为第一个参数传递
export const useStateStore = defineStore("state", {
  state: () => {
    return {
      count: 0,
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {},
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

- 使用

一旦 store 被实例化，你就可以直接在 store 上访问 state、getters 和 actions 中定义的任何属性。 我们将在接下来的页面中详细介绍这些内容，但自动补全会对您有所帮助。

请注意，store 是一个用 reactive 包裹的对象，这意味着不需要在 getter 之后写.value，但是，就像 setup 中的 props 一样，我们不能对其进行解构：

```ts
import { useStateStore } from "@/stores/counter.ts";
// store 实例化
const counter = useStateStore();

// ❌ 这不起作用，因为它会破坏响应式
// 这和从 props 解构是一样的
const { name, doubleCount } = store;

// 更新方法一
counter.count++;
// 更新方法二
counter.$patch({ count: counter.count + 1 });
// 更新方法三
counter.increment();
```

为了从 `Store` 中提取属性同时保持其响应式，您需要使用 `storeToRefs`()。 它将为任何响应式属性创建 `refs`。 当您仅使用 `store` 中的状态但不调用任何操作时，这很有用：

```ts
import { storeToRefs } from "pinia";

const counter = useStateStore();
// `count` 是响应式引用
// 这也会为插件添加的属性创建引用
// 但跳过任何 action 或 非响应式（不是 ref/reactive）的属性
const { count } = storeToRefs(counter);
```

### getters

`Getter` 完全等同于 `Store` 状态的计算值。 它们可以用 `defineStore()` 中的 `getters` 属性定义。 它们接收“状态”作为第一个参数以鼓励箭头函数的使用：

- 定义

```ts
export const useGetters = defineStore("getters", {
  state: () => ({
    count: 1,
    users: [
      {
        name: "张一",
        id: 1,
      },
      {
        name: "张二",
        id: 2,
      },
      {
        name: "张三",
        id: 3,
      },
    ],
  }),
  getters: {
    // 普通 getters
    doubleCount: (state) => state.count * 2,
    // 可传参 getters
    // Getters 只是幕后的 computed 属性，因此无法向它们传递任何参数。 但是，您可以从 getter 返回一个函数以接受任何参数：
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId);
    },
  },
});
```

- 使用

  1. 普通调用

  ```ts
  import { useGetters } from "@/stores/counter.ts";
  // store 实例化
  const counter = useGetters();
  count++; // 2
  console.log(counter.doubleCount); // 4
  ```

  2.  传参调用

  ```ts
  const user = counter.getUserById(2);
  console.log(user.name); // 张二
  ```

### actions

与`getters`一样，`actions`也可以通过`this`访问整个`store`实例。 区别是，`actions`可以是异步的，可以在其中`await`任何`API`调用甚至其他操作:

- 定义

```ts
const api = "/api/users";
export const useStore = defineStore("action", {
  state: () => ({
    counter: 0,
    userData: null,
  }),
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password });
        showTooltip(`Welcome back ${this.userData.name}!`);
      } catch (error) {
        showTooltip(error);
        // 让表单组件显示错误
        return error;
      }
    },
  },
});
```

- 使用

```ts
import { useActions } from "@/stores/counter.ts";
// store 实例化
const counter = useActions();
const callAction = () => {
  counter.increment();
  console.log(counter.count); // 2
};
```
