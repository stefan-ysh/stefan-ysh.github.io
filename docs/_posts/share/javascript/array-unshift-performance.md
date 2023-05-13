---
title:  【EN】Performance Issues with unshift in JavaScript Arrays
date: 2022-10-23 21:39:49
permalink: /pages/adc19a/
sidebar: auto
categories: 
  - javascript
tags: 
  - 
---
![Performance comparison picture](../../../.vuepress/public/post/share/javascript/array-unshift-performance/js-arr-unshift-push.jpeg)

## Problem description

Recently, while working on a BigScreen project that involved drag and drop functionality, I designed it so that the latest dragged component would be placed on the topmost layer (to save time, I used the component list as the layer list). I was confident that there would be no issues, but during the debugging process, the browser crashed frequently. However, as it happened only occasionally, I didn't pay too much attention to it.

## Reason analysis

After debugging with breakpoints, I finally narrowed down the issue to the operation of updating the component list. I discovered that the problem was caused by the unshift method that I had used earlier to save time. Since I rarely used this method before, I conducted a simple comparative experiment to verify this

```js
/*UNSHIFT*/
var unArr = [];
console.time("unshift");

for (let j = 0; j < 100000; j++) {
  unArr.unshift(j);
}

console.timeEnd("unshift");

/*PUSH*/
var puArr = [];
console.time("push");

for (let i = 0; i < 100000; i++) {
  puArr.push(i);
}

console.timeEnd("push");
```

```shell
# the first time

unshift: 948.592ms
push: 3.737ms

# the second time

unshift: 943.298ms
push: 3.428ms

# the third time

unshift: 936.947ms
push: 3.403ms
```

The unshift method in JavaScript arrays is used to add one or more elements to the beginning of an array. However, its performance issues are mainly due to the need to reallocate memory space when adding elements. This is usually slower than using the push method to add elements to the end of the array, because push only needs to add elements to the existing memory block.

By comparing the results, we can see that for the same number of elements (100000), the unshift method takes over 300 times longer than push (may vary based on the system). This is because the unshift method adds data to the beginning of the array, which means that the positions of the existing elements will be shifted back by one. In contrast, push adds an element directly to the end of the array without affecting the positions of other elements, thus eliminating the need to rearrange the positions. As the number of elements increases, the performance gap will become even more significant.

If you require high-performance array operations, consider using other methods to maintain the array. For example, use the push method to add elements to the end of the array and the shift method to remove elements from the beginning of the array. Additionally, you can use the splice method in JavaScript to add or remove elements at any position in the array without the need to reallocate memory space
![问题图片](../../../.vuepress/public/post/share/javascript/array-unshift-performance/unshift-push-performance.jpeg)

So how can we achieve this functionality in JavaScript arrays? Here are a few approaches you can try:

## Solution

You can achieve the same effect as unshift by breaking it down into push + reverse. For safety, I have also prepared a test code snippet below

```js
// /*UNSHIFT*/
const arr1 = [];

console.time("time1");

for (let i = 0; i < 10000; i++) {
  arr1.unshift(i);
}
console.timeEnd("time1");

// /*PUSH + REVERSE*/

const arr2 = [];
console.time("time2");

for (let j = 0; j < 10000; j++) {
  arr2.push(j);
}
arr2.reverse();
console.timeEnd("time2");
```

```shell
# the first time

time1: 9.87ms
time2: 0.443ms

# the second time

time1: 9.747ms
time2: 0.428ms

# the third time

time1: 9.691ms
time2: 0.446ms
```

The above experiment shows that the total time taken for the push + reverse operations is only 1/22 of the time taken for the unshift operation.