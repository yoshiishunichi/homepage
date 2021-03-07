<template>
  <nuxt-link :to="link">
    <img :src="source" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    source: { type: String, default: '', require: true },
    link: { type: String, default: '', require: true },
  },
}
</script>

<style lang="scss" scoped>
a {
  display: block;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
}

a:hover {
  opacity: 0.75;
}

img {
  margin-top: 50px;
  display: block;
  width: 150px;
  border-radius: 15px;
  border: 2px solid #000;
}
</style>
