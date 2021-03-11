<template>
  <div v-if="load" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return { load: true }
  },
  methods: {
    loaded() {
      this.load = false
    },
  },
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 100;
}
</style>
