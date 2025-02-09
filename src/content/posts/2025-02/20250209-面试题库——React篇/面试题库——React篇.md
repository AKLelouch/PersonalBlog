---
title: 面试题库——React篇
published: 2025-02-09
description: ''
image: ''
tags: []
category: ''
draft: false
---

# 解释一下 React 虚拟 DOM 的工作原理

## 虚拟 DOM 的概念

虚拟 DOM 是真实 DOM 的轻量级 JavaScript 对象表示。React 使用它来避免直接操作昂贵的真实 DOM，从而提高性能。

## 初始渲染

- **组件渲染**：React 组件首次渲染时，会生成虚拟 DOM 树，描述 UI 结构。

- **转换为真实 DOM**：React 将虚拟 DOM 树转换为真实 DOM 节点，插入浏览器中显示。

## 状态更新

- **重新生成虚拟 DOM**：当组件状态或属性变化时，React 重新生成虚拟 DOM 树。

- **差异对比（Diffing）**：React 比较新旧虚拟 DOM 树，找出需要更新的部分。

- **最小化更新**：React 只将差异部分应用到真实 DOM，减少操作次数。

## 差异对比算法

React 使用高效的 Diffing 算法，主要包括：

- **层级比较**：按树层级逐层对比，若节点类型不同，直接替换整个子树。

- **列表对比**：使用 key 属性优化列表项的对比，减少不必要的更新。

## 批量更新

- React 将多个状态更新合并为一次更新，减少真实 DOM 的操作次数，进一步提升性能。

## 优势

- **性能提升**：减少直接操作真实 DOM 的开销。

- **简化开发**：开发者无需手动优化 DOM 操作，React 自动处理。

- **跨平台**：虚拟 DOM 抽象了平台差异，便于实现跨平台应用。

## 总结

React 的虚拟 DOM 通过创建轻量级 JavaScript 对象表示 UI，结合高效的 Diffing 算法和批量更新机制，显著提升了 UI 更新的性能，同时简化了开发流程。

# React 虚拟 DOM 对性能方面有什么帮助

1. 减少直接操作真实 DOM 的开销
2. 高效的差异对比（Diff）算法
3. 批量更新（Batching）
4. 跨平台性能优化

## 总结

React 的虚拟 DOM 通过减少直接操作真实 DOM 的次数、高效的差异对比算法、批量更新机制以及跨平台优化，显著提升了 UI 更新的性能。它使开发者能够以声明式的方式编写高性能的 UI，而无需手动优化 DOM 操作。

# React 路由主要有几种模式

react 的路由有几种模式：hash（hashchange） 和 history （replaceState、pushState）

1. Hash 模式（HashRouter）
   Hash 模式使用 URL 中的 哈希部分（#） 来实现路由。哈希部分的变化不会导致浏览器向服务器发送请求，因此适合静态部署或不需要服务器配置的场景。

```jsx
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </HashRouter>
  );
}
```

2. History 模式（BrowserRouter）
   History 模式使用 HTML5 的 History API 来实现路由。它通过操作浏览器的历史记录来改变 URL，并且不会导致页面刷新。

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

[React 路由使用](https://juejin.cn/post/7102047013818073096)
