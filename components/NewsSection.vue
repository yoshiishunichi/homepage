<template>
  <section>
    <p class="date">{{ date }}</p>
    <h5 class="section-title">{{ title }}</h5>
    <img v-if="source" :src="source" decoding="async" />
    <!-- eslint-disable vue/no-v-html -->
    <p class="description" v-html="getDescription()" />
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', require: true },
    date: { type: String, default: '', require: true },
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
.date {
  margin-top: 27px;
  font-size: 15px;
  margin-left: 21px;
}

.section-title {
  margin-top: 12px;
}

.description {
  width: 90%;
}
</style>
