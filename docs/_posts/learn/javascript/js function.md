---
title: js 函数
date: 2022-09-26 23:53:28
permalink: /pages/673fc7/
sidebar: auto
categories: 
  - javascript
tags: 
  - 
---

## 函数声明方法

1. 函数声明

   > 函数名就是指向函数对象的指针

   ```js
   function sum(num1, num2) {
     return num1 + num2;
   }
   ```

2. 函数表达式

   > 函数名就是指向函数对象的指针

   ```js
   let sum = function (num1, num2) {
     return num1 + num2;
   };
   ```

3. 箭头函数

   ```js
   let sum = (num1, num2) => {
     return num1 + num2;
   };
   ```

4. 构造函数声明

   > 这个构造函数接收任意多个字符串参数，最后一个参数始终会被当成函数体，而之前的参数都是新函数的参数，这种语法很好地诠释了：把函数想象为对象，把函数名想象为指针。

   ```js
   let sum = new Function("num1", "num2", "return num1 + num2");
   ```

   这种方式会将代码解析两次，影响性能，所以 _不推荐_：

   1. 将它当作常规`ECMAScript`代码
   2. 解释传给构造函数的字符串

## 箭头函数

箭头函数实例化的函数对象与正式的函数表达式创建的函数对象行为是相同的。任何可以使用函数表达式的地方，都可以使用箭头函数，下面例子，点击按钮观察左侧 `badge` 变化：

:::demo

```html
<template>
  <el-row>
    <el-col :span="14">
      <el-badge
        :value="msgNum"
        type="primary"
        v-if="msgNum"
        :class="{'apply-shake': isShaked}"
      >
        <el-button size="mini">@我的消息</el-button>
      </el-badge>
      <el-button v-else size="mini">@我的消息</el-button>
    </el-col>
    <el-col :span="10">
      <el-button size="mini" @click="plusOneByArrowFun"
        >+ 1 by arrow fun</el-button
      >
      <el-button size="mini" @click="plusOneByFunExp">+ 1 by fun exp</el-button>
      <el-button size="mini" @click="clear" :disabled="!msgNum"
        >Clear</el-button
      >
    </el-col>
  </el-row>
</template>
<script>
  // 函数表达式声明函数
  function functionExperssionSum() {
    return 1;
  }
  // 箭头函数声明函数
  const arrowSum = () => 1;

  export default {
    name: "ArrowFunction",
    data() {
      return {
        msgNum: 0,
        isShaked: false,
      };
    },
    methods: {
      plusOneByArrowFun() {
        const result = arrowSum();
        this.msgNum += result;
        this.loading();
      },
      plusOneByFunExp() {
        const result = functionExperssionSum();
        this.msgNum += result;
        this.loading();
      },
      clear() {
        this.msgNum = 0;
      },
      loading() {
        this.isShaked = true;
        setTimeout(() => {
          this.isShaked = false;
          this.isDisable = false;
        }, 500);
      },
    },
  };
</script>
<style>
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  .apply-shake {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
</style>
```

:::

小括号使用规则

```js
    // 一个参数时，括号可有可无
    let double = (x) => { return 2 * x; };
    let triple = x => { return 3 * x; };

    // 没有参数 or 多个参数时需要括号
    let getRandom = () => { return Math.random(); };
    let sum = (a, b) => { return a + b; };

    // 无效的写法：
    let multiply = a, b => { return a * b; };
```

大括号使用规则
使用大括号就说明包含"函数体"，字面上理解，体一般来说值得是多人才是集体，所以大于一行语句时，需要加大括号；如果只有一行代码，那么可以省略大括号，同时函数会隐式返回的是这行代码的值

```js
    // 以下两种写法都有效，而且返回相应的值
    let double = (x) => { return 2 * x; };
    let triple = (x) => 3 * x;

    // 可以赋值
    let value = {};
    let setName = (x) => x.name = "Jack Ma";
    setName(value);
    console.log(value.name); // ==> "Jack Ma"

    // 无效的写法：
    let multiply = (a, b) => return a * b;
```

小结：箭头函数不能使用 `arguments`、`super` 和 `new.target`，也不能用作构造函数。此外，箭头函数也没有 `prototype` 属性。

## 函数名

因为函数名就是指向函数的指针，所以它们跟其他包含对象指针的变量具有相同的行为。这意味着一个函数可以有多个名

```js
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 10)); // 20

// 使用不带括号的函数名会访问函数指针，而不会执行函数
let anotherSum = sum;
console.log(anotherSum(10, 10)); // 20
sum = null;
console.log(anotherSum(10, 10)); // 20
```

以上代码内容如下：

1. 定义了一个名为 `sum()` 的函数，用于求两个数之和。
2. 又声明了一个变量 `anotherSum`，并将它的值设置为等于 `sum`。**注意，使用不带括号的函数名会访问函数指针，而不会执行函数。**此时，`anotherSum` 和 `sum` 都指向同一个函数。
3. 调用 `anotherSum()`也可以返回结果。把 `sum` 设置为 `null`之后，就切断了它与函数之间的关联。而 `anotherSum()`还是可以照常调用，没有问题

每个函数都有一个 `name` 的只读属性，这个标识符中存着函数的字符串化的变量名，

1. 如果没有名称，则显示空字符串
2. 使用构造函数生成的函数，该属性是 `anonymous`
3. 如果函数是一个获取函数、设置函数，或者使用 bind()实例化，那么标识符前面会加上一个前缀：

```js
function foo() {}
let bar = function () {};
let baz = () => {};
console.log(foo.name); // foo
console.log(bar.name); // bar
console.log(baz.name); // baz
console.log((() => {}).name); //（空字符串）
console.log(new Function().name); // anonymous

function foo1() {}
console.log(foo1.bind(null).name); // bound foo
let dog = {
  years: 1,
  get age() {
    return this.years;
  },
  set age(newAge) {
    this.years = newAge;
  },
};
let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, "age");
console.log(propertyDescriptor.get.name); // get age
console.log(propertyDescriptor.set.name); // set age
```

## 理解参数

js 函数既不关心传入的参数个数，也不关心这些参数的数据类型，之所以会这样，主要是因为`ECMAScript`函数的参数在内部表现为一个数组`arguments`(一个类数组^[1]^对象,但不是 Array 的实例)，因此可以使用中括号语法访问其中的元素（第一个参数是`arguments[0]`，第二个参数是`arguments[1]`）。而要确定传进来多少个参数，可以访问`arguments.length`属性。**但为了方便，一般情况下我们都会把参数写出来。**

以下两段代码作用相同：

- ```js
  function sayHi(name, message) {
    console.log("Hello " + name + ", " + message);
  }
  ```

- ```js
  function sayHi() {
    console.log("Hello " + arguments[0] + ", " + arguments[1]);
  }
  ```

`arguments`对象可以跟命名参数一起使用

```js
function doAdd(num1, num2) {
  if (arguments.length === 1) {
    console.log(num1 + 10);
  } else if (arguments.length === 2) {
    console.log(arguments[0] + num2);
  }
}
```

## 附录

[1] 类数组，可以通过下标访问，但是不能使用如 push、shift 等数组操作方法
