<template>
  <div class="main-container container">
    <div v-if="load">
      <Loading />
    </div>
    <h4 class="page-title">PageTop</h4>
    <div class="top-content">
      <img src="/images/top-page.png" class="top-img" :load="loaded()" />
      <h4 class="top-theme">New App</h4>
      <NewAppSection />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      load: true,
      images: ['DeadMan', 'DeadManSample', 'top-page', 'ganja_tuber'],
    }
  },
  head() {
    return {
      title: 'ganja_tuberホームページ',
      titleTemplate: '',
    }
  },
  mounted() {
    let count = 0
    for (let i = 0; i < this.images.length; i++) {
      axios
        .get(`https://ganja-tuber.netlify.app/images/${this.images[i]}.png`)
        .then((res) => {
          count++
          if (count >= this.images.length) {
            this.loadComp()
          }
        })
    }
  },
  methods: {
    loaded() {
      this.loadComp()
    },
    loadComp() {
      if (this.load) {
        setTimeout(() => {
          this.load = false
        }, 750)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.top-img {
  width: 350px;
  max-width: 90%;
  margin: 0 auto;
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
