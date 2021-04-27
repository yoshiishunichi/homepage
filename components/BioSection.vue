<template>
  <section>
    <h5 class="section-title">{{ title }}</h5>
    <!-- eslint-disable vue/no-v-html -->
    <p class="description" v-html="getDescription()" />
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', require: true },
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

.description {
  width: 90%;
}
</style>
