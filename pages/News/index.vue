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
        title: 'UriBrellaを作成',
        date: '2021/8/21',
        description:
          '神戸大学のキャンパスの降水量を5分間隔でチェックできるアプリを作りました。<br>初めて自分でバックエンドをいじってみました。<br>これまでの集大成的なアプリになってるのでよかったら見てみてください。<br><br>from ganja_tuber',
      },
      {
        title: '白州の値段を捏造するサイトを作成',
        date: '2021/7/4',
        description:
          'Pythonを使って白州18年の値段を自動で取得し、任意の年代の値段を捏造するwebアプリです。<br>初めて自分でバックエンドをいじってみました。<br>好きな白州の年代を作ってツイートしてみてください。<br><br>from ganja_tuber',
      },
      {
        title: '全裸ツイッター部のホームページを作成',
        date: '2021/6/11',
        description:
          '#全裸ツイッター部 のホームページをAngularで作成しました。<br>皆さんも、ハッシュタグ #全裸ツイッター部 でツイートしてみてください。<br><br>from ganja_tuber',
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
