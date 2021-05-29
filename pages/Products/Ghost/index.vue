<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <AppSection
      title="心霊写真ﾒｰｶｰ"
      description="心霊写真を作るアプリです。<br>このアプリのアイコンはフリー素材から自作したのですが、我ながらいい雰囲気で気に入っています。"
      source="/images/Ghost.png"
      :app="true"
      link="https://apps.apple.com/jp/app/%E5%BF%83%E9%9C%8A%E5%86%99%E7%9C%9F%EF%BE%92%EF%BD%B0%EF%BD%B6%EF%BD%B0/id1567583453"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '心霊写真ﾒｰｶｰ',
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
