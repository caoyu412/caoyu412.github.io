<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
    <footer-information v-if="this.$route.name !== 'love' && this.$route.name !== 'stars'"></footer-information>
  </div>
</template>

<script>
import NavMenu from './components/Navmenu'
import FooterInformation from './components/Footer'

export default {
  name: 'app',
  components: {
    NavMenu,
    FooterInformation,
  },
};
</script>

<style>
@import "../node_modules/normalize.css/normalize.css";
@import "utils.css";

#app {
  height: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F5ECDC;
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
   margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
