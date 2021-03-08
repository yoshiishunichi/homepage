<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="殺すぞ"
      description="カラフルな殺害予告を作るサイトです"
      source="/images/Kill.png"
      :center="true"
      link="https://yoshiishunichi.github.io/kill/"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '殺すぞ',
    }
  },
}
</script>
