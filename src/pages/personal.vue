<template>
  <div class="content-article">
    <div class="main">
      <my-skill></my-skill>
    <!--  <a class="link-article" href="https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md" target="_blank">Airbnb代码规范</a>
      <a class="link-article" href="http://www.fefork.com/fetool/" target="_blank">有点老的大前端工具集</a>
      <a class="link-article" href="http://es6.ruanyifeng.com" target="_blank">ES6教程&#45;&#45;阮一峰经典</a>
      <a class="link-article" href="https://github.com/mqyqingfeng/Blog" target="_blank">冴羽博客&#45;&#45;JavaScript深入系列</a>
      <a class="link-article" href="https://github.com/camsong/blog/issues/3" target="_blank">React Immutable Data</a>
      <a class="link-article" href="https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000" target="_blank">廖雪峰-git教程</a>
      <a class="link-article" href="https://github.com/kangbin/You-Dont-Know-JS" target="_blank">你不知道的JavaScript</a>
      <a class="link-article" href="https://segmentfault.com/a/1190000004322487" target="_blank">XMLHttpRequest 解读</a>
      <a class="link-article" href="http://www.css88.com/doc/chrome-devtools/" target="_blank">chrome调试工具详解</a>
      <a class="link-article" href="http://dockone.io/article/101" target="_blank">Docker经典</a>-->
    </div>
  </div>
</template>

<script>
import MySkill from '../components/mySkill'

export default {
  data() {
    return {
      msg: '',
    }
  },
  components: {
    MySkill,
  }
};
</script>

<style scoped>
  .content-article {
    position:relative;
    width: 100%;
    height: 1500px;
    background: url("../assets/img/0145f058f42b01a8012049ef61c517.jpg") center no-repeat;
  }

  .main {
    position: absolute;
    width: 400px;
    height: 700px;
    top: -720px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .link-article {
    display: block;
    padding-top: 20px;
  }
</style>
