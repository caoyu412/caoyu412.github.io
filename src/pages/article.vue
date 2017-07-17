<template>
  <div>
    <div>
      <el-row>
        <el-col :span="3"><div class="grid-content"></div></el-col>
        <el-col :span="18">
          <nav-menu></nav-menu>
          <div class="content">
          
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
      msg: '我是文章页',
    };
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 1700px;
  background: url("http://img.zcool.cn/community/018d455955da1aa8012193a3eace97.jpg") center no-repeat;
}
</style>
