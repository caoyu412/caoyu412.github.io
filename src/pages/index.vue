<template>
  <div>
    <el-row>
      <el-col :span="3"><div class="grid-content"></div></el-col>
      <el-col :span="18">
        <nav-menu></nav-menu>
        我是首页
      </el-col>
      <el-col :span="3"><div class="grid-content"></div></el-col>
    </el-row>
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

<style>


</style>
