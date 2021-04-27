<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="バトルメーカー"
      description="ポケモンのバトル画面風のコラ画像が作れるアプリ"
      source="/images/VS.png"
      :app="true"
      link="https://apps.apple.com/jp/app/%E3%83%90%E3%83%88%E3%83%AB%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id1521008684"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'バトルメーカー',
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
