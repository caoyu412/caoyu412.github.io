<template>
      <el-row>
        <nav-menu></nav-menu>
        <el-col :span="3"><div class="grid-content"></div></el-col>
        <el-col :span="18">
          <div class="content">
            我是案例页
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
      msg: '我是案例页',
    };
  },
};
</script>

<style scoped>
  .content {
    width: 100%;
    height: 934px;
  }
</style>
