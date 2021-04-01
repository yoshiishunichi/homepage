<template>
  <div class="products-container container">
    <div v-if="load">
      <Loading />
    </div>
    <h4 class="page-title">Products</h4>
    <ul class="apps-list">
      <li v-for="name in products" :key="name" class="apps-elem">
        <AppImage :source="`/images/${name}.png`" :link="`/Products/${name}`" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      load: true,
      products: [
        'DeadMan',
        '3renKey',
        'Kill',
        'Bomb',
        'Mimikaki',
        'Dog',
        'Crime',
        'Koyaku',
        'Buzz',
        'VS',
        'Gochi',
        'Fukidashi',
        'Nisesatu',
      ],
    }
  },
  head() {
    return {
      title: 'Products',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ganja_tuberの作ったアプリ・サイトをまとめています。',
        },
      ],
    }
  },
  mounted() {
    let count = 0
    for (let i = 0; i < this.products.length; i++) {
      axios
        .get(`https://ganja-tuber.netlify.app/images/${this.products[i]}.png`)
        .then((res) => {
          count++
          if (count >= this.products.length) {
            this.loadComp()
          }
        })
    }
  },
  methods: {
    loadComp() {
      if (this.load) {
        setTimeout(() => {
          this.load = false
        }, 200)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.apps-list {
  width: 95%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}

.apps-elem {
  width: 25%;
  display: inline-block;
  padding: 0;
  margin: 0;
  float: left;
}

@media screen and (max-width: 800px) {
  .apps-elem {
    width: 33.3%;
    float: left;
  }
}

@media screen and (max-width: 600px) {
  .apps-elem {
    width: 50%;
    float: left;
  }
}

@media screen and (max-width: 400px) {
  .apps-elem {
    width: 100%;
    float: left;
  }
}
</style>
