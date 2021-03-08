<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="ゴチルーレット"
      description="使いやすいルーレット<br>最後に脳汁音が流れます。"
      source="/images/Gochi.png"
      :app="true"
      :center="true"
      link="https://apps.apple.com/jp/app/%E3%82%B4%E3%83%81%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88/id1523153708"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ゴチルーレット',
    }
  },
}
</script>
