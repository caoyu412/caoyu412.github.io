<template>
  <div class="wrap">
    <a class="option" v-for="(item, index) in data" :href="item.link">
      {{ item.name }}
    </a>
  </div>
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
  .wrap {
    width: 100%;
    height: 52px;
    background: url("../assets/nav-bg.png") repeat-x;
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
    
    /*&:hover {*/
      /*background: url("../assets/nav-bg-hover.png") repeat-x;*/
     /*}*/
  }
  
  .option:hover {
    width: 140px;
    height: 52px;
    background: url("../assets/nav-bg-hover.png") repeat-x center;
  }

</style>
