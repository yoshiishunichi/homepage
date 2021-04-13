<template>
  <div class="main-container container">
    <h4 class="page-title">PageTop</h4>
    <div class="top-content">
      <img src="/images/top-page.png" class="top-img" decoding="async" />
      <h4 class="top-theme">New App</h4>
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
  width: 350px;
  max-width: 90%;
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
</style>
