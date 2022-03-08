---
title: 如何进行级联选择框的清除
date: 2022-03-08
categories:
tags:
# publish: true
isShowComments: true
---

## 问题描述

表单提交时会有相互关联的下拉框，例如：我选择了`一级部门A`，那么子部门的选项就只能是`一级部门A`下面的子部门，当我选好了所有部门后，又想更改的话，那么在我切换一级部门的时候就应该同时清除已经选择的子部门。

```html
<!--  一级部门 -->
<el-form-item label="一级部门">
  <el-select
    v-model="addMemberForm.primarySector"
    placeholder="Please select a primary sector"
    @change="changePrimarySector"
  >
    <el-option
      v-for="(item, index) in primarySectorOpt"
      :key="index"
      :label="item.name"
      :value="item.id"
    >
    </el-option>
  </el-select>
</el-form-item>

<!--  一级部门下面的子部门 -->
<el-form-item label="子部门">
  <el-select
    v-model="addMemberForm.subdivision"
    placeholder="Please select a subdivision"
    @change="changeSubdivision"
  >
    <el-option
      v-for="(item, index) in subdivisionOpt"
      :key="index.id"
      :label="item.name"
      :value="item.id"
    >
    </el-option>
  </el-select>
</el-form-item>
```

## 解决方案

1. 在选择一级部门时用 js 原生方法 [delete](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 方法删除已选子部门的内容（可以实现效果，但未经测试，不推荐）

```js
// 选择一级部门触发
changePrimarySector(e) {
  delete this.addMemberForm.subdivision;
},
```

2. 通过`vue` 的 [this.\$set(targetObj, key, value)](https://cn.vuejs.org/v2/api/#Vue-set) 方法实现（官方提供方法，推荐）

```js
this.$set(this.addMemberForm, "subdivision", "");

// 多个清空动作
let clearItems = ["subdivision", "OTHER"];
clearItems.forEach((item) => {
  this.$set(this.addMemberForm, item, "");
});
```
