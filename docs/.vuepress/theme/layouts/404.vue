<!--
 * @description  : 这里修改文件描述
 * @Author       : k423
 * @Date         : 2020-06-17 13:53:59
 * @LastEditors  : k423
 * @LastEditTime : 2020-06-17 15:36:30
 * @FilePath     : \k.blog\docs\.vuepress\theme\layouts\404.vue
--> 
<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">回到首页</RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `诶呀，这是个死胡同`,
  `我是怎么来到这的！`,
  `朋友，404了`,
  `你好像迷路了`
];

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
  }
};
</script>
