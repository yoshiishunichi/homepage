<template>
  <section>
    <div v-if="load">
      <Loading />
    </div>
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
      <a v-if="!link" class="not-link back-color">配信停止中...</a>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <p :class="{ center: center }" v-html="getDescription()" />
  </section>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    title: { type: String, default: '', require: true },
    description: { type: String, default: '', require: true },
    source: { type: String, default: '', require: false },
    app: { type: Boolean, default: false, require: false },
    center: { type: Boolean, default: false, require: false },
    link: { type: String, default: '', require: false },
  },
  data() {
    return { load: true }
  },
  mounted() {
    axios.get(`https://ganja-tuber.netlify.app${this.source}`).then((res) => {
      this.loadComp()
    })
  },
  methods: {
    getDescription() {
      const splitDescription = this.description.split('<br>')
      const brDescription = splitDescription.join('<br />')
      return brDescription
    },
    loadComp() {
      if (this.load) {
        setTimeout(() => {
          this.load = false
        }, 200)
      }
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

.not-link {
  margin-top: 12px;
  font-weight: bold;
  font-size: 15px;
  display: block;
  color: white;
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
}
</style>
