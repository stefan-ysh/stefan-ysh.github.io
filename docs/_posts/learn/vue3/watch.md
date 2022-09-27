---
title: vue3 学习之监听器
date: 2022-09-26 21:07:23
permalink: /pages/c9c3e3/
sidebar: auto
categories:
  - vue
---

## 前言

vue 中 watch 用来监听数据的响应式变化,获取数据变化前后的值

watch 的完整入参

```js
watch(监听的数据，副作用函数，配置对象)
watch(data, (newData, oldData) => {}, {immediate: true, deep: true})

```

## watch 监听的不同情况

```js
// 创建响应式数据
import { ref, watch, reactive } from "vue";
let name = ref("moxun");
let age = ref(18);
let person = reactive({
  Hobby: "photo",
  city: {
    jiangsu: {
      nanjing: "雨花台",
    },
  },
});
```

### 1. 监听单个 refimpl 数据

```js
watch(name, (newName, oldName) => {
  console.log("newName", newName);
});
```

### 2. 监听多个 refimpl 数据

#### 2.1 vue3 允许多个 watch 监听器存在

```js
watch(name, (newValue, oldValue) => {
  console.log("new", newValue, "old", oldValue);
});
watch(age, (newValue, oldValue) => {
  console.log("new", newValue, "old", oldValue);
});
```

#### 2.2 将需要监听的数据添加到数组

```js
watch([name, age], (newValue, oldValue) => {
  // 返回的数据是数组
  console.log("new", newValue, "old", oldValue);
});
```

## 3. 监听 proxy 数据

> 1. 此时 vue3 将强制开启 deep 深度监听
> 2. 当监听值为 proxy 对象时，oldValue 值将出现异常，此时与 newValue 相同

```js
// 监听proxy对象
watch(person, (newValue, oldValue) => {
  console.log("newValue", newValue, "oldValue", oldValue);
});
```

## 4. 监听 proxy 数据的某个属性

需要将监听值写成函数返回形式,vue3 无法直接监听对象的某个属性变化

```js
watch(
  () => person.Hobby,
  (newValue, oldValue) => {
    console.log("newValue", newValue, "oldvalue", oldValue);
  }
);
```

当监听 proxy 对象的属性为复杂数据类型时，需要开启 deep 深度监听

```js
watch(
  () => person.city,
  (newvalue, oldvalue) => {
    console.log("person.city newvalue", newvalue, "oldvalue", oldvalue);
  },
  {
    deep: true,
  }
);
```

## 5. 监听 proxy 数据的某些属性

```js
watch([() => person.age, () => person.name], (newValue, oldValue) => {
  // 此时newValue为数组
  console.log("person.age", newValue, oldValue);
});
```

## 总结

1. 与 vue2 中的 watch 配置一致
2. 两个坑：

   2.1. 监听`reactive`定义的`proxy`代理数据时

   - `oldValue`无法正确获取
   - 强制开启`deep`深度监听（无法关闭）

     2.2. 监听`reactive`定义的`proxy`代理对象某个属性时`deep`配置项生效
