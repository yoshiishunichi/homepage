<template>
  <div class="err-container container">
    <h4 class="page-title">404</h4>
  </div>
</template>

<script>
export default {
  asyncData({ redirect }) {
    return redirect('/')
  },
}
</script>

<style lang="scss" scoped>
p {
  margin-top: 100px;
}
</style>
