# 基础

## vue.js 是什么

> Vue 是一套用于构建用户界面的*渐进式框架*。它被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。

## 官方脚手架 vue-cli

:::tip Node 版本要求
Vue CLI 需要 Node.js 8.9 或者更高版本（8.11.0+）。你可以使用 nvm 或者 nvm-windows 在同一台电脑中管理多个 Node 版本。
:::

通过下列命令行全局安装：

```sh
npm i -g @vue/cli
# OR
yarn global add @vue/cli
```

安装之后，可以运行下列命令查看其版本是否正确：

```sh
vue --version
```

创建项目，Now just coding：

```sh
vue create project-name
```

## 开发好搭档

:one: 官方路由 [vue-router](https://router.vuejs.org/zh/api/)

```sh
vue add router
```

:two: 状态管理 [vuex](https://vuex.vuejs.org/zh/api/)

```sh
vue add vuex
```

:three: 网络请求（推荐） [axios](https://github.com/axios/axios)

```sh
vue add axios
```

:four: ui 框架（常用） [element-ui](https://element.eleme.cn/#/zh-CN/component/layout)

```sh
vue add element
```

## 快速上手 vue 指令

:one: v-text，v-html

分别将数据渲染为 text 和 html，常用的 `{{"\{\{data\}\}"}}` 写法就是 v-text 的缩写。

```html
<span v-text="msg"></span>
<!-- same as -->
<span>{{msg}}</span>

<div v-html="html"></div>
```

:two: v-model

创建一个双向绑定，只能用在一些表单控件以及组件上：\<input> \<select> \<textarea> components

修饰符：

- .lazy - 监听 change 事件而不是 input
- .number - 将有效输入字符串转换成数字
- .trim - 去掉首尾空格

```html
<input v-model="inputText" placeholder="编辑内容" />
```

:three: v-if，v-else

根据条件决定元素是否渲染，其中 v-if 可以单独使用，而 v-else 必须要配合 v-if。

```html
<div v-if="condition">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

:four: v-show

根据条件切换元素的`display` CSS property。该指令触发过渡效果。

```html
<div v-show="condition">
  Now you see me
</div>
```

:five: v-for

基于源数据多次渲染元素或者模块，必须使用特定语法`alias in expression`来提供指令值。

```html
<div v-for="(item, index) in items" :key="index">
  {{item.text}}
</div>
```

:six: v-on

缩写：`@`

参数：`event`

修饰符：

- .stop - 调用 event.stopPropagation()。
- .prevent - 调用 event.preventDefault()。
- .capture - 添加事件侦听器时使用 capture 模式。
- .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
- .native - 监听组件根元素的原生事件。
- .once - 只触发一次回调。
- .left - (2.2.0) 只当点击鼠标左键时触发。
- .right - (2.2.0) 只当点击鼠标右键时触发。
- .middle - (2.2.0) 只当点击鼠标中键时触发。
- .passive - (2.3.0) 以 { passive: true } 模式添加侦听器

```html
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 动态事件 (2.6.0+) -->
<button v-on:[event]="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 动态事件缩写 (2.6.0+) -->
<button @[event]="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>

<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>

<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter" />

<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter" />

<!-- 点击回调只会触发一次 -->
<button v-on:click.once="doThis"></button>

<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

:seven: v-bind

缩写：`:`

修饰符：

- .prop - 作为一个 DOM property 绑定而不是作为 attribute 绑定。([差别在哪里？](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028))
- .camel - (2.1.0+) 将 kebab-case attribute 名转换为 camelCase。(从 2.1.0 开始支持)
- .sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。

```html
<!-- 绑定一个 attribute -->
<img v-bind:src="imageSrc" />

<!-- 动态 attribute 名 (2.6.0+) -->
<button v-bind:[key]="value"></button>

<!-- 缩写 -->
<img :src="imageSrc" />

<!-- 动态 attribute 名缩写 (2.6.0+) -->
<button :[key]="value"></button>

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName" />

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">
  <!-- style 绑定 -->
  <div :style="{ fontSize: size + 'px' }"></div>
  <div :style="[styleObjectA, styleObjectB]"></div>

  <!-- 绑定一个全是 attribute 的对象 -->
  <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

  <!-- 通过 prop 修饰符绑定 DOM attribute -->
  <div v-bind:text-content.prop="text"></div>

  <!-- prop 绑定。“prop”必须在 my-component 中声明。-->
  <my-component :prop="someThing"></my-component>

  <!-- 通过 $props 将父组件的 props 一起传给子组件 -->
  <child-component v-bind="$props"></child-component>

  <!-- XLink -->
  <svg><a :xlink:special="foo"></a></svg>
</div>
```

:eight: v-slot

缩写：`#`

预期：可放置在函数参数位置的 JavaScript 表达式 (在支持的环境下可使用解构)。可选，即只需要在为插槽传入 prop 的时候使用。

参数：插槽名（可选，默认`default`）

```html
<!-- 具名插槽 -->
<base-layout>
  <template v-slot:header>
    Header content
  </template>

  Default slot content

  <template v-slot:footer>
    Footer content
  </template>
</base-layout>

<!-- 接收 prop 的具名插槽 -->
<infinite-scroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</infinite-scroll>

<!-- 接收 prop 的默认插槽，使用了解构 -->
<mouse-position v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</mouse-position>
```

:nine: v-pre

不需要表达式。跳过这个元素和子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。

```html
<span v-pre>{{this is will not be compiled}}</span>
```

:one::zero: v-once

顾名思义，使元素只渲染一次。之后的重新渲染都会被当成静态内容跳过。

```html
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 有子元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` 指令-->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```

:one::one: v-cloak

不需要表达式。这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

```css
[v-cloak] {
  display: none;
}
```

```html
<div v-cloak>
  {{message}}
</div>
```

这个元素不会显示，直到编译结束。

## 快速上手组件

### 组件注册

:one: **全局注册**

```js
Vue.component("my-component-name", {
  // ... 选项 ...
});
```

:two: **局部注册**

```js
var ComponentA = {
  /* ... */
};
var ComponentB = {
  /* ... */
};
var ComponentC = {
  /* ... */
};
new Vue({
  el: "#app",
  components: {
    "component-a": ComponentA,
    "component-b": ComponentB,
    //ComponentA,
    //ComponentB,
  },
});
```

### Prop

:one: **大小写问题**

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名。

:two: **Prop 类型**

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```

:three: **传递静态或者动态 prop**

```js
//静态
<blog-post title="staticProp"></blog-post>
//动态
<blog-post v-bind:title="someData"></blog-post>
```

:four: **Prop 验证**

```js
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
```
