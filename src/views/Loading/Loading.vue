<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  background: url('https://www.static.snak.space/config/776c65b69b14b035db9e62e0789103bf.jpg') center center no-repeat #fff;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
</style>