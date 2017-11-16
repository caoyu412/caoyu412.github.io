<template>
  <el-row class="wrap-row">
    <div class="wrap">
      <el-col :span="3"><div class="grid-content"></div></el-col>
      <el-col :span="18">
        <div class="wrap-main">
          <a v-for="(item, index) in data" :href="item.link" :class="{'option': true,'active': item.index === Index}" @click="handleSelect(index)">
            {{ item.name }}
          </a>
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content"></div></el-col>
    </div>
  </el-row>

</template>

<script>
export default {
  data() {
    return {
      Index: '',
      data: [
        {
          name: '首页',
          link: '/index/0',
          index: '0',
        },
        {
          name: 'demo展示',
          link: '/case/1',
          index: '1',
        },
        {
          name: '银河',
          link: '/stars/2',
          index: '2',
        },
        {
          name: '告白',
          link: '/love/3',
          index: '3',
        },
        {
          name: '相册',
          link: '/picture/4',
          index: '4',
        },
        {
          name: '好文推荐',
          link: '/article/5',
          index: '5',
        },
      ],
    };
  },
  methods: {
    init() {
//      this.Index = window.localStorage.navIndex
      this.Index = this.$route.params.navIndex
    },
    handleSelect(index) {
      this.Index = index
    },
  },
  mounted() {
    this.init()
  }
};
</script>

<style scoped>
  .wrap-row {
    margin-bottom: 0;
  }
  .wrap {
    width: 100%;
    height: 52px;
    background-color: #585369;
  }

  .wrap-main {
    width: 100%;
    height: 52px;
  }

  .content {
    width: 100%;
    height: 100%;
  }

  .option {
    float: left;
    width: 140px;
    height: 52px;
    line-height: 52px;
    text-align: center;
    cursor: pointer;
    color: #fff;

    /*&:hover {*/
      /*background: url("../assets/nav-bg-hover.png") repeat-x;*/
     /*}*/
  }

/*  .option:hover {
    width: 140px;
    height: 52px;
    background-color: #A3226A;
  }*/
  .active {
    background-color: #A3226A;
  }

</style>
