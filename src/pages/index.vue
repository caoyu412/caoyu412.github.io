<template>
  <div>
    <div>
      <el-row>
        <el-col :span="3"><div class="grid-content"></div></el-col>
        <el-col :span="18">
          <nav-menu></nav-menu>
          <div class="content">
            首页
          </div>
        </el-col>
        <el-col :span="3"><div class="grid-content"></div></el-col>
      </el-row>
    </div>
  </div>
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
    width: 100%;
    height: auto;
  }
</style>
