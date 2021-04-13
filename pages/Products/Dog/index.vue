<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="犬にエサをあげるアプリ"
      description="毎朝犬にエサをあげるアプリです。<br>エサやりを忘れると犬が死にます。"
      source="/images/Dog.png"
      :app="true"
      :center="true"
      link="https://apps.apple.com/jp/app/%E7%8A%AC%E3%81%AB%E3%82%A8%E3%82%B5%E3%82%92%E3%81%82%E3%81%92%E3%82%8B%E3%82%A2%E3%83%97%E3%83%AA/id1530695779"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '犬にエサをあげるアプリ',
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
