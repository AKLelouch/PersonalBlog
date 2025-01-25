---
title: 基于React及TypeScript封装组件库之（一）项目搭建与封装AntD
published: 2025-01-23
description: ''
image: ''
tags: ['React', 'AntD', 'TypeScript', 'Webpack', 'Babel', 'Frontend']
category: '封装组件库'
draft: true
---

在工作过程中开发阿里引擎的低代码平台时，涉及到封装组件库给引擎引入。从零封装一套组件库是一个费力不讨好的工作，因此考虑使用 AntD 封装。

# 目标

1. React 组件库，取名 x-components，导出 x-components.umd.js、x-components.umd.css。
2. 组件逻辑使用 TypeScript 开发。
3. 组件样式使用 less 开发。
4. 组件使用 webpack 作为打包工具，引入 AntD 组件库，x-components.umd.js 及 x-components.umd.css 包含 AntD 代码，React 及 React-Dom 模块使用外部引入。

# 项目构建
