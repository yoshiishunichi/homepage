<template>
  <div>
    <Header ref="header" />
    <div @click="parentEvent">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    Header,
  },
  methods: {
    parentEvent() {
      console.log('hey')
      this.$refs.header.close()
    },
  },
}
</script>
