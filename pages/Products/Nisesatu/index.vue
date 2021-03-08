<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="偽札メーカー"
      description="偽札風のコラ画像を作るアプリ"
      source="/images/Nisesatu.png"
      :app="true"
      :center="true"
      link="https://apps.apple.com/jp/app/%E5%81%BD%E6%9C%AD%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id1524242559"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '偽札メーカー',
    }
  },
}
</script>
