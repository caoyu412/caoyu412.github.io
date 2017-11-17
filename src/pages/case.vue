<template>
      <el-row>
        <el-col :span="3"><div class="grid-content"></div></el-col>
        <el-col :span="18">
          <div class="content">
            <div class="wrap-show">
              <div class="show">
                <slide-show :slides="slides" :inv="slideSpeed" @onchange="dosomethingOnSlide"></slide-show>
              </div>
            </div>
            <div class="blog-main">

            </div>
          </div>
        </el-col>
        <el-col :span="3"><div class="grid-content"></div></el-col>
      </el-row>
</template>

<script>
import SlideShow from '../components/SlideShow'

export default {
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
  methods: {
    dosomethingOnSlide() {
    },
  },
  components: {
    SlideShow,
  },
};
</script>

<style scoped>
  .content {
    width: 100%;
    height: auto;
  }
  .wrap-show {
    position:relative;
    width: 100%;
    height: 600px;
  }
  .show {
    position: absolute;
    width: 900px;
    height: 500px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .blog-main {
    width: 100%;
    height: 900px;
    background: lightblue;
  }
</style>
