<template>
  <div>
    <section>
      <h5 class="section-title">白州の値段を捏造するサイト</h5>
      <div class="img-holder">
        <img
          class="thumnail app-icon"
          src="/images/HakushuPrice.png"
          decoding="async"
        />
        <a
          class="app-link back-color"
          href="https://hakushu-price-generator.herokuapp.com/"
          target="_blank"
          rel="noopener"
          >Link</a
        >
      </div>
      <p class="description">
        Pythonを使って白州18年の値段を自動で取得し、任意の年代の値段を捏造するwebアプリです。<br />初めて自分でバックエンドをいじってみました。
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
</style>
