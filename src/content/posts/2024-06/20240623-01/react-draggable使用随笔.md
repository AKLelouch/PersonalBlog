---
title: react-draggable使用随笔
published: 2024-06-23
description: '使用时遇到的问题总结'
image: ''
tags: ['React', 'TypeScript']
category: 'Frontend'
draft: false
---

# react-draggable 避免触发组件 onClick 事件

最近在工作过程中需要封装移动拖拽组件，于是使用三方库 React-draggable 进行封装。但是在使用过程中发现当使用`<Draggable>`包裹的组件存在 onClick 事件，则会在拖拽后触发 onClick 事件。代码如下：

```javascript
<Draggable>
  <button onClick={() => console.log('被点击')}>按钮</button>
</Draggable>
```

于是用一个变量标记组件正在拖动。

```javascript
import Draggable from 'react-draggable';

function App() {
  let dragging = false;
  const onStart = () => {
    console.log('drag start');
    // dragging = true;
  };
  const onDrag = () => {
    console.log('drag Drag');
    dragging = true;
  };

  const onStop = () => {
    console.log('drag stop');

    setTimeout(() => {
      dragging = false;
    }, 0);
  };

  const onClick = () => {
    if (dragging) return;
    console.log('被点击');
  };

  return (
    <div>
      <Draggable onStart={onStart} onDrag={onDrag} onStop={onStop}>
        <button onClick={onClick}>按钮</button>
      </Draggable>
    </div>
  );
}
```

这段代码的关键是
<code>
setTimeout(() => {
dragging = false;
}, 0)
</code>。这里有几个关键点：</br>

1. 在 react-draggable 源码中,`onStart`、`onDrag`、`onStop`分别被绑定在 Mouse 事件的`mousedown`、`mousemove`、`mouseup`上，因此上述函数执行顺序是，`onStart -> onDrag -> onStop -> onClick`
2. `onClick`是在<code>onStop</code>之后执行，因此需要通过`setTimeout`将`dragging`的赋值延迟到下一个`onClick`的宏任务后执行。
