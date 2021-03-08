<template>
  <section class="app-section">
    <h5>{{ title }}</h5>
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
        v-else
        class="app-link back-color"
        :href="link"
        target="_blank"
        rel="noopener"
        >リンク</a
      >
    </div>
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', require: true },
    description: { type: String, default: '', require: true },
    source: { type: String, default: '', require: false },
    app: { type: Boolean, default: false, require: false },
    link: { type: String, default: '', require: true },
  },
}
</script>

<style lang="scss" scoped>
.app-section {
  width: 95%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  background: white;
  border-radius: 15px;
}

h5 {
  font-size: 21px;
  color: black;
  margin-top: 12px;
  margin-bottom: 12px;
}

p {
  font-size: 18px;
  color: black;
  width: 90%;
  text-align: center;
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

.app-link {
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

.app-link:hover {
  background: white;
  color: black;
  border: 2px solid black;
}
</style>
