<template>
  <div class="news-container container">
    <h4 class="page-title">News</h4>
    <ul>
      <li v-for="(value, key, index) in news" :key="index">
        <NewsSection
          :title="value.title"
          :date="value.date"
          :description="value.description"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const news = [
      {
        title: '全裸ツイッター部のホームページを作成',
        date: '2021/6/11',
        description:
          '#全裸ツイッター部のホームページをAngularで作成しました。<br>皆さんも、ハッシュタグ #全裸ツイッター部 でツイートしてみてください。<br><br>from ganja_tuber',
      },
      {
        title: 'make-mosaic',
        date: '2021/6/7',
        description:
          'Angularを使って画像にモザイクをかけるサイトを公開しました。<br>シンプルなデザインで使いやすいのでよかったら使ってみてください。<br><br>from ganja_tuber',
      },
      {
        title: '心霊写真を作るアプリ',
        date: '2021/5/29',
        description:
          '心霊写真が作れるアプリを公開しました。<br>最近は、サーバーやらlinuxやらスクレイピングやらtypescriptやらの周りくどい話ばかりしていたので、気晴らしに1時間くらいで作ってみました。<br>アイコンが結構気に入っています。<br><br>from ganja_tuber',
      },
      {
        title: 'ホームページリニューアル',
        date: '2021/3/10',
        description:
          'Nuxt.jsを使ってganja_tuberのホームページをリニューアルしました。<br>がんばっておしゃれな感じにリニューアルしたのでよかったら見てください。<br>今後もがんばっていきますので何卒よろしくお願いします。<br><br>from ganja_tuber',
      },
    ]
    return {
      news,
    }
  },
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
