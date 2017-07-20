<template>
      <el-row>
        <nav-menu></nav-menu>
        <el-col :span="3"><div class="grid-content"></div></el-col>
        <el-col :span="18">
          <div class="content">
            <div class="main">
              首页
            </div>
          </div>
        </el-col>
        <el-col :span="3"><div class="grid-content"></div></el-col>
      </el-row>
</template>

<script>
import NavMenu from '../components/Navmenu';

export default {
  components: {
    NavMenu,
  },
  data() {
    return {
      msg: '我是首页',
    };
  },
};
</script>

<style scoped>
  .content {
    position: relative;
    width: 100%;
    height: 934px;
  }
  
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 800px;
    margin-top: -400px;
    margin-left: -400px;
    background-color: #fff;
    /* transition: width 3s, height 3s, transform 3s; */
    animation: information 3s linear 1s;
    border: 1px solid #fff;
    
    border-radius: 10px;
    color: #585369;
  }
  
  @keyframes information {
    0% {
      width: 800px;
      height: 800px;
      margin-top: -400px;
      margin-left: -400px;
      transform: rotate(0);
    }
    
    50% {
      width: 300px;
      height: 300px;
      margin-top: -150px;
      margin-left: -150px;
      transform: rotate(180deg);
    }
    
    100% {
      width: 800px;
      height: 800px;
      margin-top: -400px;
      margin-left: -400px;
      transform: rotate(360deg);
    }
  }
</style>
