<template>
  <section>
    <h5>{{ title }}</h5>
    <img :src="source" />
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', require: true },
    description: { type: String, default: '', require: true },
    source: { type: String, default: '', require: false },
  },
}
</script>
