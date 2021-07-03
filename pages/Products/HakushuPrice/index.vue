<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="白州の値段を捏造するサイト"
      description="Pythonを使って白州18年の値段を自動で取得し、任意の年代の値段を捏造するwebアプリです。<br>初めて自分でバックエンドをいじってみました。"
      source="/images/HakushuPrice.png"
      link="https://hakushu-price-generator.herokuapp.com/"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '白州の値段を捏造するサイト',
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
