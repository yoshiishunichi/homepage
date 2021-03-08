<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="遺影メーカー"
      description="遺影を作れるアプリです。"
      source="/images/DeadMan.png"
      :app="true"
      :center="true"
      link="https://apps.apple.com/jp/app/%E9%81%BA%E5%BD%B1%E7%94%BB%E5%83%8F%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id1556352136"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '遺影メーカー',
    }
  },
}
</script>
