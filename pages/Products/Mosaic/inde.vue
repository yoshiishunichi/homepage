<template>
  <div class="products-container container">
    <h4 class="page-title">Mosaic</h4>
    <AppSection
      title="make-mosaic"
      description="画像にモザイクをかけるサイトです。<br>初めてAngularを使ってみました。<br>シンプルで良い出来なので、使ってみてください。"
      source="/images/3renKey.png"
      link="https://3ren-keyboard.netlify.app/"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'make-mosaic',
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
