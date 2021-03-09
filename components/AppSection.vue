<template>
  <section>
    <h5 class="section-title">{{ title }}</h5>
    <div class="image-wrapper">
      <img class="app-icon" :src="source" />
      <a
        v-if="app"
        class="app-link back-color"
        :href="link"
        target="_blank"
        rel="noopener"
        >App Store</a
      >
      <a
        v-if="!app && link"
        class="app-link back-color"
        :href="link"
        target="_blank"
        rel="noopener"
        >Link</a
      >
      <a v-if="!link" class="back-color">配信停止中...</a>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <p :class="{ center: center }" v-html="getDescription()" />
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', require: true },
    description: { type: String, default: '', require: true },
    source: { type: String, default: '', require: false },
    app: { type: Boolean, default: false, require: false },
    center: { type: Boolean, default: false, require: false },
    link: { type: String, default: '', require: false },
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
p {
  font-size: 18px;
  color: black;
  width: 90%;
  text-align: left;
  margin: 15px auto;
}

.image-wrapper {
  width: 150px;
  margin-left: auto;
  margin-right: auto;
}

.app-icon {
  display: block;
  border: 2px solid black;
  border-radius: 15px;
  width: 150px;
}

.center {
  text-align: center;
}
</style>
