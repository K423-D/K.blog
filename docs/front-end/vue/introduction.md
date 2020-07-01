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

官方路由 vue-router:

```sh
vue add router
```

状态管理 vuex:

```sh
vue add vuex
```

网络请求（推荐） Axios:

```sh
vue add axios
```

ui 框架（常用） element-ui:

```sh
vue add element
```

## 快速上手 vue 指令

Ⅰ. **v-text，v-html** 分别将数据渲染为 text 和 html，常用的 `{{"\{\{data\}\}"}}` 写法就是 v-text 的缩写。

```html
<span v-text="msg"></span>
<!-- same as -->
<span>{{msg}}</span>

<div v-html="html"></div>
```

Ⅱ. v-model

- 创建一个双向绑定，只能用在一些表单控件以及组件上：\<input> \<select> \<textarea> components

- 修饰符：
  - .lazy - 监听 change 事件而不是 input
  - .number - 将有效输入字符串转换成数字
  - .trim - 去掉收尾空格

```html
<input v-model="inputText" placeholder="编辑内容" />
```

Ⅲ. v-if，v-else

根据条件决定元素是否渲染，其中 v-if 可以单独使用，而 v-else 必须要配合 v-if。

```html
<div v-if="condition">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```
