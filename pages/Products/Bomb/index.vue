<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="爆弾を解除するゲーム"
      description="爆弾を解除するゲームです"
      source="/images/Bomb.png"
      :center="true"
      link="https://yoshiishunichi.github.io/bakudan/"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '爆弾を解除するゲーム',
    }
  },
}
</script>
