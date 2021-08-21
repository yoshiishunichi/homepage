<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="UriBrella"
      description="神戸大学のキャンパスの降水量を5分間隔でチェックできるアプリ。<br>iOS版とブラウザ版があります。<br>集大成的な作品。"
      source="/images/UriBrella.png"
      link="https://uribrella-web.netlify.app/"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'UriBrella',
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
