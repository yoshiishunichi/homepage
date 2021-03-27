<template>
  <div class="news-container container">
    <h4 class="page-title">News</h4>
    <NewsSection
      title="ホームページリニューアル"
      date="2021/3/11"
      description="Nuxt.jsを使ってganja_tuberのホームページをリニューアルしました。<br><br>がんばっておしゃれな感じになったのでよかったら見てください。<br><br>今後もがんばっていきますので何卒よろしくお願いします。<br><br>from ganja_tuber"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'News',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ganja_tuberの最新情報です。',
        },
      ],
    }
  },
}
</script>
