<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="耳かきするゲーム"
      description="耳かきをするゲームです"
      source="/images/Mimikaki.png"
      link="https://yoshiishunichi.github.io/mimikaki/"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '耳かき',
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
