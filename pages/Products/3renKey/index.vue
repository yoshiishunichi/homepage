<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="3連キーボード図柄"
      description="手元のキーボードを使ってピアノを演奏できるサイトです。<br>シンセサイザーみたいに各鍵盤に音を割り当てたり、キーの配列を自由に変更できます。<br>(Google Chromeのみ対応)"
      source="/images/3renKey.png"
      link="https://3ren-keyboard.netlify.app/"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '3連キーボード図柄',
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
