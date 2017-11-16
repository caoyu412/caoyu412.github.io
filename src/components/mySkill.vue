<template>
  <div class="content">
    <div class="main">
      <h2 class="title">掌握技能</h2>
      <p class="line-txt">1. 熟悉W3C标准，理解表现与数据分离、Web语义化。</p>
      <p class="line-txt">2. 精通PC端HTML+CSS页面架构和布局方式。 </p>
      <p class="line-txt">3. 熟练使用JavaScript，熟练运用ES5，ES6及严格模式开发。   </p>
      <p class="line-txt">4. 有一定JavaScript面向对象思想，对代码模块化、组件化有一定理解。</p>
      <p class="line-txt">   有项目模块化经验，能够使用require.js，可进行基于jQuery插件开发。</p>
      <p class="line-txt">5. 理解AJAX运作机制，熟练使用AJAX进行数据获取及跨域请求。</p>
      <p class="line-txt">7. 掌握HTML5，CSS3新增标签及属性。  </p>
      <p class="line-txt">8. 熟练使用，jQuery、Zepto.js类库进行PC及移动端开发。</p>
      <p class="line-txt">9. 熟练使用React.js，Vue.js，Angular.js，ionic，bootstrap等框架类库。  </p>
      <p class="line-txt">10. 掌握webpack、gulp前端工程构建化工具。</p>
      <p class="line-txt">11. 能够使用Github、SVN版本迭代工具。</p>
      <p class="line-txt">12. 掌握sass/less、postcss开发规范。</p>
      <p class="line-txt">13. 熟练运用windows及Mac OS系统进行开发。 </p>
      <p class="line-txt">14. 后端语言了解Java、Node.js。</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<style scoped>
  .content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .title {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .line-txt {
    text-align: left;
    padding-left: 12%;
  }

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 700px;
    height: 86%;
    margin-top: -320px;
    margin-left: -350px;
    /* transition: width 3s, height 3s, transform 3s; */
    animation: information 2s linear 1s;
    border: 1px solid #fff;

    border-radius: 10px;
    color: #585369;
  }

  @keyframes information {
    0% {
      width: 700px;
      height: 700px;
      margin-top: -320px;
      margin-left: -350px;
      transform: rotate(0);
      font-size: 16px;
    }

    50% {
      width: 440px;
      height: 440px;
      margin-top: -220px;
      margin-left: -220px;
      transform: rotate(180deg);
      font-size: 10px;
    }

    100% {
      width: 700px;
      height: 700px;
      margin-top: -320px;
      margin-left: -350px;
      transform: rotate(360deg);
      font-size: 16px;
    }
  }
</style>
