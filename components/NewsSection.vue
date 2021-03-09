<template>
  <section>
    <p class="date">{{ date }}</p>
    <h5 class="section-title">{{ title }}</h5>
    <img v-if="source" :src="source" />
    <!-- eslint-disable vue/no-v-html -->
    <p class="desc" v-html="getDescription()" />
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', require: true },
    date: { type: String, default: '', require: true },
    source: { type: String, default: '', require: true },
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
  margin-bottom: 21px;
}

.desc {
  margin-bottom: 60px;
}

p {
  font-size: 18px;
  color: black;
  width: 90%;
  text-align: left;
  margin-top: 27px;
  margin-left: auto;
  margin-right: auto;
}
</style>
