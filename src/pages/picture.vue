<script src="../../../酷炫/jiaoben2329/js/imageTransform3D.js"></script>
<template>
  <div class="content">
    <picture-messy v-if="pictureID === 0"></picture-messy>
  </div>
</template>

<script>
import PictureMessy from './pictureMessy'

export default {
  data() {
    return {
      pictureID: 0,
    }
  },
  methods: {
  },
  components: {
    PictureMessy,
  },
};
</script>

<style scoped>

  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
