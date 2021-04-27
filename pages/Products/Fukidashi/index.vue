<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="フキダシター"
      description="画像にフキダシをつけるアプリ"
      source="/images/Fukidashi.png"
      :app="true"
      link="https://apps.apple.com/jp/app/%E3%83%95%E3%82%AD%E3%83%80%E3%82%B7%E3%82%BF%E3%83%BC/id1523822560"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'フキダシター',
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
