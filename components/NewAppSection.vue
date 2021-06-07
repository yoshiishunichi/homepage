<template>
  <div>
    <section>
      <h5 class="section-title">make-mosaic</h5>
      <div class="img-holder">
        <img
          class="thumnail app-icon"
          src="/images/Mosaic.png"
          decoding="async"
        />
        <a
          class="app-link back-color"
          href="https://make-mosaic.netlify.app/"
          target="_blank"
          rel="noopener"
          >Link</a
        >
      </div>
      <p class="description">
        画像にモザイクをかけるサイトです。
        <br />
        初めてAngularを使ってみました。
        <br />
        シンプルで良い出来なので、使ってみてください。
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
