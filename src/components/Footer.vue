<template>
  <div class="wrap">
    <el-row>
      <el-col :span="3"><div class="grid-content"></div></el-col>
      <el-col :span="18">
        <div class="wrap-main">
          &copy;&nbsp;2017&nbsp; 曹雨的小屋
          Powered by Joker
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: #585369;
    text-align: center;
    font-size: 12px;
    color: #e9e9e9;
    margin-top: 60px;
  }

  .wrap-main {
    width: 100%;
    height: 100px;
  }

  .content {
    width: 100%;
    height: 100%;
  }

  .option {
    float: left;
    width: 138px;
    height: 52px;
    line-height: 52px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    border-radius: 8px;
    margin: 0 1px;

    /*&:hover {*/
      /*background: url("../assets/nav-bg-hover.png") repeat-x;*/
     /*}*/
  }

  .option:hover {
    background-color: #A3226A;
  }
  .active {
    background-color: #A3226A;
  }

</style>
