<template>
  <section>
    <h5 class="section-title">{{ title }}</h5>
    <!-- eslint-disable vue/no-v-html -->
    <p class="desc" v-html="getDescription()" />
    <img src="/images/ganja_tuber.png" class="thum" />
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', require: true },
    source: { type: String, default: '', require: false },
    description: { type: String, default: '', require: true },
  },
  methods: {
    getDescription() {
      const splitDescription = this.description.split('<br>')
      const brDescription = splitDescription.join('<br />')
      return brDescription
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
}

.thum {
  display: block;
  width: 100%;
}

.desc {
  margin-bottom: 48px;
  font-size: 18px;
  color: black;
  width: 90%;
  text-align: left;
  margin-top: 27px;
  margin-left: auto;
  margin-right: auto;
}
</style>
