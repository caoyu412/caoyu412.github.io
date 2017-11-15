<script src="../../../酷炫/jiaoben2329/js/imageTransform3D.js"></script>
<template>
      <el-row>
        <nav-menu></nav-menu>
        <el-col :span="3"><div class="grid-content"></div></el-col>
        <el-col :span="18">
          <div class="content">

          </div>
        </el-col>
        <el-col :span="3"><div class="grid-content"></div></el-col>
      </el-row>
</template>

<script>
import NavMenu from '../components/Navmenu'
import SlideShow from '../components/SlideShow'

export default {
  data() {
    return {}
  },
  methods: {

  },
  components: {
    NavMenu,
  },
};
</script>

<style scoped>
  .content {
    width: 100%;
    height: 934px;
  }
</style>
