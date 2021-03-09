<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import loadingMixin from '@/components/loadingMixin'

export default {
  mixins: [loadingMixin],
}
</script>
