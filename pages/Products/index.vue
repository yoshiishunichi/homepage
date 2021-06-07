<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <ul class="apps-list">
      <li v-for="name in products" :key="name" class="apps-elem">
        <AppImage :source="`/images/${name}.png`" :link="`/Products/${name}`" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      load: true,
      products: [
        'Mosaic',
        'Ghost',
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
