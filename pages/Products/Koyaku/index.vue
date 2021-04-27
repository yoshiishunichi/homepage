<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="小役カウンター"
      description="スロットに使えるカウンター"
      source="/images/Koyaku.png"
      :app="true"
      link="https://apps.apple.com/jp/app/%E5%B0%8F%E5%BD%B9%E3%82%AB%E3%82%A6%E3%83%B3%E3%82%BF%E3%83%BC/id1518062577"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '小役カウンター',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ganja_tuberの作ったアプリ・サイトをまとめています。',
        },
      ],
    }
  },
}
</script>
