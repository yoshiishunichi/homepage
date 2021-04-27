<template>
  <div>
    <section>
      <h5 class="section-title">遺影画像メーカー</h5>
      <div class="img-holder">
        <img
          class="thumnail app-icon"
          src="/images/DeadMan.png"
          decoding="async"
        />
        <a
          class="app-link back-color"
          href="https://apps.apple.com/jp/app/%E9%81%BA%E5%BD%B1%E7%94%BB%E5%83%8F%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC/id1556352136"
          target="_blank"
          rel="noopener"
          >App Store</a
        >
      </div>
      <p class="description">
        遺影の画像を作れるアプリです。お手軽にコラ画像作って遊んでみてください。
        <br />
        ※iOSのみ対応しています。
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  margin-top: 24px;
}

.top-theme {
  width: 95%;
  max-width: 800px;
  font-size: 20px;
  display: block;
  line-height: 42px;
  background-color: #fff;
  font-family: 'Asap', sans-serif;
}

.thumnail {
  max-width: 240px;
  display: block;
  margin-left: 21px;
  @media screen and (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }
}

a {
  display: block;
  max-width: 240px;
  margin-top: 24px;
  margin-left: 21px;
  @media screen and (max-width: 600px) {
    width: 80%;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
  }
}

.img-holder {
  float: left;
  margin-bottom: 24px;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: block;
  }
}
</style>
