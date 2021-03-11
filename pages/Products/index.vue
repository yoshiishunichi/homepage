<template>
  <div class="products-container container">
    <div v-if="load">
      <Loading />
    </div>
    <h4 class="page-title">Products</h4>
    <ul class="apps-list">
      <li class="apps-elem">
        <AppImage source="/images/DeadMan.png" link="/Products/DeadMan" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/3renKey.png" link="/Products/3renKey" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/Kill.png" link="/Products/Kill" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/Bomb.png" link="/Products/Bomb" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/Mimikaki.png" link="/Products/Mimikaki" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/Dog.png" link="/Products/Dog" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/Crime.png" link="/Products/Crime" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/Koyaku.png" link="/Products/Koyaku" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/Buzz.png" link="/Products/Buzz" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/VS.png" link="/Products/VS" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/Gochi.png" link="/Products/Gochi" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/Fukidashi.png" link="/Products/Fukidashi" />
      </li>
      <li class="apps-elem left1">
        <AppImage source="/images/Nisesatu.png" link="/Products/Nisesatu" />
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
      images: [
        'DeadMan',
        '3renKey',
        'Kill',
        'Bomb',
        'Mimikaki',
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
    loadComp() {
      console.log('loadComp')
      if (this.load) {
        setTimeout(() => {
          this.load = false
        }, 500)
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

.left1 {
  margin-left: 0 !important;
}
</style>
