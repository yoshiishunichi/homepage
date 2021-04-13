<template>
  <section>
    <h5 class="section-title">遺影画像メーカー</h5>
    <img class="thumnail app-icon" src="/images/DeadMan.png" decoding="async" />
    <p class="new-app-text">
      遺影の画像を作れるアプリです。お手軽にコラ画像作って遊んでみてください。
      <br />
      ※iOSのみ対応しています。
      <br />
      <br />
      こんな感じの画像が作れます↓
    </p>
    <img class="sample" src="/images/DeadManSample.png" decoding="async" />
    <a
      class="app-link back-color"
      href="https://apps.apple.com/jp/app/%E9%81%BA%E5%BD%B1%E7%94%BB%E5%83%8F%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id1556352136"
      target="_blank"
      rel="noopener"
      >App Store</a
    >
  </section>
</template>

<style lang="scss" scoped>
.thumnail,
.sample {
  width: 25%;
  min-width: 150px;
  display: block;
  margin: 0 auto;
  margin: 24px auto;
}

.new-app-text {
  font-size: 18px;
  text-align: left;
  width: 90%;
  margin: 30px auto 12px auto;
}

a {
  display: block;
  margin: 24px auto;
}
</style>
