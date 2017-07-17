<template>
  <div>
    <nav-menu></nav-menu>
    我是案例页
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
      msg: '我是案例页',
    };
  },
};
</script>

