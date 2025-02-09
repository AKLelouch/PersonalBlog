---
title: 面试题库——CSS篇
published: 2025-02-09
description: ''
image: ''
tags: ['前端', '面试']
category: '前端面试'
draft: false
---

# · css 不同屏幕分辨率适配方法

1. 使用媒体查询（Media Queries）
   媒体查询是 CSS3 中用于根据设备特性（如屏幕宽度、高度、分辨率等）应用不同样式的技术。

```css
/* 默认样式 */
body {
  background-color: lightblue;
}

/* 当屏幕宽度小于600px时应用的样式 */
@media screen and (max-width: 600px) {
  body {
    background-color: lightcoral;
  }
}

/* 当屏幕宽度在600px到900px之间时应用的样式 */
@media screen and (min-width: 600px) and (max-width: 900px) {
  body {
    background-color: lightgreen;
  }
}

/* 当屏幕宽度大于900px时应用的样式 */
@media screen and (min-width: 900px) {
  body {
    background-color: lightyellow;
  }
}
```

2. 使用相对单位
   使用相对单位（如%、em、rem、vw、vh 等）可以让元素的尺寸根据屏幕大小自动调整。

```css
.container {
  width: 80%; /* 宽度为父元素的80% */
  font-size: 1.2rem; /* 字体大小为根元素字体大小的1.2倍 */
  padding: 2em; /* 内边距为当前字体大小的2倍 */
}

.header {
  height: 10vh; /* 高度为视口高度的10% */
}
```

3. 使用 Flexbox 布局
   Flexbox 是一种弹性盒子布局模型，可以轻松实现不同屏幕尺寸下的自适应布局。

```css
.container {
  display: flex;
  flex-wrap: wrap; /* 允许子元素换行 */
}

.item {
  flex: 1 1 200px; /* 子元素可以伸缩，基础宽度为200px */
}
```

4. 使用 Viewport 单位
   Viewport 单位（vw、vh、vmin、vmax）可以根据视口的大小来设置元素的尺寸。

```css
.header {
  width: 100vw; /* 宽度为视口宽度的100% */
  height: 10vh; /* 高度为视口高度的10% */
}

.section {
  font-size: 4vmin; /* 字体大小为视口宽度和高度中较小值的4% */
}
```

# · 有一个父元素它的透明度是 opacity：0.5，子元素我给它设置为 1； 这个子元素的透明度是多少？那如何设置子元素的透明度为 1 呢？

当一个父元素的透明度设置为 opacity: 0.5，而子元素的透明度设置为 opacity: 1 时，子元素的实际透明度并不是 1，而是会受到父元素透明度的影响。

- opacity 是继承的：子元素的透明度会基于父元素的透明度计算。

- 计算公式：子元素的实际透明度 = 父元素的透明度 × 子元素的透明度。

因此，子元素的实际透明度为：0.5（父元素） × 1（子元素） = 0.5

如果希望子元素完全不透明（即透明度为 1），需要将父元素的 opacity 也设置为 1。

# · Flex 的属性有哪些

[Flex 布局教程：语法篇](https://ruanyifeng.com/blog/2015/07/flex-grammar.html)
