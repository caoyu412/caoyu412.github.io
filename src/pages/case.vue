<template>
      <el-row>
        <nav-menu></nav-menu>
        <el-col :span="3"><div class="grid-content"></div></el-col>
        <el-col :span="18">
          <div class="content">
            我是案例页
            
              <slide-show :slides="slides" :inv="slideSpeed" @onchange="dosomethingOnSlide"></slide-show>
            
          </div>
        </el-col>
        <el-col :span="3"><div class="grid-content"></div></el-col>
      </el-row>
</template>

<script>
import NavMenu from '../components/Navmenu';
import SlideShow from '../components/SlideShow';

export default {
  components: {
    NavMenu,
    SlideShow,
  },
  data() {
    return {
      msg: '我是案例页',
      slideSpeed: 2000,
      slides: [
        {
          src: require('../assets/slide1.jpg'),
          title: 'xxx1',
          href: 'javascript',
        },
        {
          src: require('../assets/slide2.jpg'),
          title: 'xxx2',
          href: 'javascript',
        },
        {
          src: require('../assets/slide3.jpg'),
          title: 'xxx3',
          href: 'javascript',
        },
        {
          src: require('../assets/slide4.jpg'),
          title: 'xxx4',
          href: 'javascript',
        },
      ],
    };
  },
  metch: {
    dosomethingOnSlide() {
    },
  },
};
</script>

<style scoped>
  .content {
    width: 100%;
    height: 934px;
  }
</style>
