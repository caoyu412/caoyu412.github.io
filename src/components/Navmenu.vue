<template>
  <el-row class="wrap-row">
    <div class="wrap">
      <el-col :span="3"><div class="grid-content"></div></el-col>
      <el-col :span="18">
        <div class="wrap-main">
          <a class="option" v-for="(item, index) in data" :href="item.link">
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
      data: [
        {
          name: '首页',
          link: '/',
        },
        {
          name: 'demo展示',
          link: '/case',
        },
        {
          name: '银河',
          link: '/stars',
        },
        {
          name: '告白',
          link: '/love',
        },
        {
          name: '好文推荐',
          link: '/article',
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
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

  .option:hover {
    width: 140px;
    height: 52px;
    background-color: #A3226A;
  }

</style>
