<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="全裸ツイッター部"
      description="全裸ツイッター部のホームページです。<br>ハッシュタグ #全裸ツイッター部 でツイートしましょう。"
      source="/images/NakedTwitterClub.png"
      link="https://naked-twitter-club.netlify.app/"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '全裸ツイッター部',
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
