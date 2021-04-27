<template>
  <div class="main-container container">
    <h4 class="page-title">PageTop</h4>
    <div class="top-content">
      <img src="/images/top-page.png" class="top-img" decoding="async" />
      <h4 class="top-theme color-back">NewApp</h4>
      <NewAppSection />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ganja_tuberホームページ',
      titleTemplate: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.top-img {
  display: block;
  width: 510px;
  max-width: 80%;
  margin: 0 auto;
  user-select: none;
}

.top-content {
  margin-top: 111px;
  height: auto;
  width: 100%;
}

h1 {
  color: white;
  font-size: 45px;
  margin: 42px auto 24px auto;
}

h3 {
  font-size: 21px;
  color: white;
  margin: 12px auto;
}

h2 {
  font-size: 24px;
  color: white;
}

.dummy {
  display: none;
}

.top-theme {
  margin-top: 135px;
  font-size: 18px;
  display: block;
  top: 85px;
  width: 100vw;
  min-width: 132px;
  height: 42px;
  line-height: 42px;
  margin-left: 0;
  background-color: #fff;
  font-family: 'Asap', sans-serif;
  text-align: center;
  padding-right: 12px;
}
</style>
