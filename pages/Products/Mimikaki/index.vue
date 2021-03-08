<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="耳かきするゲーム"
      description="耳かきをするゲームです"
      source="/images/Mimikaki.png"
      :center="true"
      link="https://yoshiishunichi.github.io/mimikaki/"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '耳かき',
    }
  },
}
</script>
