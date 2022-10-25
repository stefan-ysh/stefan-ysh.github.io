---
title: 巧用 css 仿刷抖音效果
date: 2022-05-18 00:00:00
categories:
  - css
# tags:
#   - css
isShowComments: true
permalink: /pages/9b8eaf/
sidebar: auto
---

## 前言

刷抖音想必是多数人每天都会做的一件事，仔细观察会发现，并不是只要滑动就会切换视频，而是需要滑动一定距离才能切换到上一个/下一个视频，今天我们就用 css 来模拟一下这种效果。

## 技术点

- [`scroll-snap-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-type)
  > 定义在滚动容器中的一个临时点（snap point）如何被严格的执行。

## 属性说明

css 的 scroll-snap-type 属性：

- `none`
  忽略临时点，相当于未设置，无任何效果，只是普通的 scroll 效果。
- `x`
  滚动容器只捕捉其水平轴上的捕捉位置。
- `y`
  滚动容器只捕捉其垂直轴上的捕捉位置。
- `block`
  滚动容器仅捕捉到其块轴上的捕捉位置。
- `inline`
  滚动容器仅捕捉到其内联轴上的捕捉位置。
- `both`
  滚动容器会独立捕捉到其两个轴上的位置（可能会捕捉到每个轴上的不同元素）
- `mandatory`
  如果它当前没有被滚动，这个滚动容器的可视视图将静止在临时点上。意思是当滚动动作结束，如果可能，它会临时在那个点上。如果内容被添加、移动、删除或者重置大小，滚动偏移将被调整为保持静止在临时点上，说人话就是，可理解为四舍五入。滚动长度大于子元素一半以上，将会跳转到下一子元素,都则展示当前子元素。
- `proximity`
  如果它当前没有被滚动，这个滚动容器的可视视图将基于基于用户代理滚动的参数去到临时点上。如果内容被添加、移动、删除或者重置大小，滚动偏移将被调整为保持静止在临时点上。

## 示例一

> 三个容器分别设置了 `none` `mandatory` `proximity`，可手动滑动感受区别，中间示例接近抖音滑动视频效果。

  <html>
      <style>
        .none, .mandatory, .proximity {
          width:25%;
          height: 200px;
          background: pink;
          overflow: auto;
        }
        .none {
          /*不做任何处理，等同于未设置*/
          scroll-snap-type: none;
        }
        .mandatory {
          /*mandatory   可理解为四舍五入。滚动长度大于子元素一半以上，将会跳转到下一子元素,都则展示当前子元素*/
          scroll-snap-type: y mandatory;
        }
        .proximity {
          /*proximity  靠近切换，足够靠近下一子元素时，完全展示下一个，足够靠近上一子元素时，展示，其余长度时，保持与 none 桶阳光*/
          scroll-snap-type: y proximity;
        }
        .item {
          width: 100%;
          height: 200px;
          line-height: 200px;
          background: rgb(93, 60, 214);
          margin-bottom: 10px;
          scroll-snap-align: center;
          text-align: center;
          font-size: 100px;
          color: #fff;
        }
      </style>
      <div style="display:flex;justify-content:space-between;">
        <div class="none">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>
          <div class="item">6</div>
          <div class="item">7</div>
        </div>
        <div class="mandatory">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>
          <div class="item">6</div>
          <div class="item">7</div>
        </div>
        <div class="proximity">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>
          <div class="item">6</div>
          <div class="item">7</div>
        </div>
      </div>

  </html>

## 示例二

- 为子元素添加 `scroll-snap-align` 属性可控制其滚动后显示位置

  - `scroll-snap-align: start;` 可使其滚动后以开始边对齐，如从左往右滑，则靠左，从上往下滑，则靠上
  - `scroll-snap-align: center;` 可使其滚动后居中显示
  - `scroll-snap-align: end;` 可使其滚动后靠结束边对齐，如从左往右滑，则靠右，从上往下滑，则靠下

<html>
  <style>
    .none,
    .mandatory,
    .proximity {
      width: 25%;
      height: 200px;
      background: pink;
      overflow: auto;
    }
    .mandatory {
      /*mandatory   可理解为四舍五入。滚动长度大于子元素一半以上，将会跳转到下一子元素,都则展示当前子元素*/
      scroll-snap-type: y mandatory;
    }
    .item_bottom_start,
    .item_bottom_center,
    .item_bottom_end {
      width: 100%;
      background: rgb(93, 60, 214);
      margin-bottom: 10px;
      text-align: center;
      color: #fff;
      font-size: 10px;
    }
    .item_bottom_start {
      scroll-snap-align: start;
    }
    .item_bottom_center {
      scroll-snap-align: center;
    }
    .item_bottom_end {
      scroll-snap-align: end;
    }
    .h50 {
      height: 50px;
      line-height: 50px;
    }
    .h70 {
      height: 70px;
      line-height: 70px;
    }
    .h80 {
      height: 80px;
      line-height: 80px;
    }
    .h90 {
      height: 90px;
      line-height: 90px;
    }
    .h100 {
      height: 100px;
      line-height: 100px;
    }
  </style>
  <div style="display: flex; justify-content: space-between">
    <div class="mandatory">
      <div class="item_bottom_start h70">1</div>
      <div class="item_bottom_start h100">2</div>
      <div class="item_bottom_start h50">3</div>
      <div class="item_bottom_start h100">4</div>
      <div class="item_bottom_start h80">5</div>
      <div class="item_bottom_start h100">6</div>
      <div class="item_bottom_start h90">7</div>
    </div>
    <div class="mandatory">
      <div class="item_bottom_center h70">1</div>
      <div class="item_bottom_center h100">2</div>
      <div class="item_bottom_center h50">3</div>
      <div class="item_bottom_center h100">4</div>
      <div class="item_bottom_center h80">5</div>
      <div class="item_bottom_center h100">6</div>
      <div class="item_bottom_center h90">7</div>
    </div>
    <div class="mandatory">
      <div class="item_bottom_end h70">1</div>
      <div class="item_bottom_end h100">2</div>
      <div class="item_bottom_end h50">3</div>
      <div class="item_bottom_end h100">4</div>
      <div class="item_bottom_end h80">5</div>
      <div class="item_bottom_end h100">6</div>
      <div class="item_bottom_end h90">7</div>
    </div>
  </div>
</html>

## 实现代码

<details>
<summary>点击查看</summary>

```html
<html>
  <style>
    .none,
    .mandatory,
    .proximity {
      width: 25%;
      height: 200px;
      background: pink;
      overflow: auto;
    }
    .none {
      /* 不做任何处理，等同于未设置 */
      scroll-snap-type: none;
    }
    .mandatory {
      /* mandatory   可理解为四舍五入。滚动长度大于子元素一半以上，将会跳转到下一子元素,都则展示当前子元素*/
      scroll-snap-type: y mandatory;
    }
    .proximity {
      /* proximity  靠近切换，足够靠近下一子元素时，完全展示下一个，足够靠近上一子元素时，展示，其余长度时，保持与 none 桶阳光*/
      scroll-snap-type: y proximity;
    }
    .item {
      width: 100%;
      height: 200px;
      line-height: 200px;
      background: rgb(93, 60, 214);
      margin-bottom: 10px;
      scroll-snap-align: center;
      text-align: center;
      font-size: 100px;
      color: #fff;
    }
  </style>
  <div style="display: flex; justify-content: space-between">
    <div class="none">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
    <div class="mandatory">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
    <div class="proximity">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
  </div>
</html>

<!------------ 以上为示例一代码，以下为示例二代码 ------------>

<html>
  <style>
    .none,
    .mandatory,
    .proximity {
      width: 25%;
      height: 200px;
      background: pink;
      overflow: auto;
    }
    .mandatory {
      /* mandatory   可理解为四舍五入。滚动长度大于子元素一半以上，将会跳转到下一子元素,都则展示当前子元素*/
      scroll-snap-type: y mandatory;
    }
    .item_bottom_start,
    .item_bottom_center,
    .item_bottom_end {
      width: 100%;
      background: rgb(93, 60, 214);
      margin-bottom: 10px;
      text-align: center;
      color: #fff;
      font-size: 10px;
    }
    .item_bottom_start {
      scroll-snap-align: start;
    }
    .item_bottom_center {
      scroll-snap-align: center;
    }
    .item_bottom_end {
      scroll-snap-align: end;
    }
    .h50 {
      height: 50px;
      line-height: 50px;
    }
    .h70 {
      height: 70px;
      line-height: 70px;
    }
    .h80 {
      height: 80px;
      line-height: 80px;
    }
    .h90 {
      height: 90px;
      line-height: 90px;
    }
    .h100 {
      height: 100px;
      line-height: 100px;
    }
  </style>
  <div style="display: flex; justify-content: space-between">
    <div class="mandatory">
      <div class="item_bottom_start h70">1</div>
      <div class="item_bottom_start h100">2</div>
      <div class="item_bottom_start h50">3</div>
      <div class="item_bottom_start h100">4</div>
      <div class="item_bottom_start h80">5</div>
      <div class="item_bottom_start h100">6</div>
      <div class="item_bottom_start h90">7</div>
    </div>
    <div class="mandatory">
      <div class="item_bottom_center h70">1</div>
      <div class="item_bottom_center h100">2</div>
      <div class="item_bottom_center h50">3</div>
      <div class="item_bottom_center h100">4</div>
      <div class="item_bottom_center h80">5</div>
      <div class="item_bottom_center h100">6</div>
      <div class="item_bottom_center h90">7</div>
    </div>
    <div class="mandatory">
      <div class="item_bottom_end h70">1</div>
      <div class="item_bottom_end h100">2</div>
      <div class="item_bottom_end h50">3</div>
      <div class="item_bottom_end h100">4</div>
      <div class="item_bottom_end h80">5</div>
      <div class="item_bottom_end h100">6</div>
      <div class="item_bottom_end h90">7</div>
    </div>
  </div>
</html>
```

</details>
