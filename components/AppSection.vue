<template>
  <section>
    <h5 class="section-title">{{ title }}</h5>
    <div class="img-holder">
      <img class="app-icon" :src="source" decoding="async" />
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
      <p v-if="!link" class="not-link back-color">配信停止中...</p>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <p class="description" v-html="getDescription()" />
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', require: true },
    description: { type: String, default: '', require: true },
    source: { type: String, default: '', require: false },
    app: { type: Boolean, default: false, require: false },
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
