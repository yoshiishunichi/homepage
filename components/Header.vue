<template>
  <div class="header-container" :class="{ openingcontainer: opening }">
    <div class="header-content back-color" :class="{ openingcontent: opening }">
      <nuxt-link class="name-link" to="/">
        <h3 class="name makinas-s">Ganja Tuber</h3>
      </nuxt-link>
      <ul class="link-list">
        <li class="link-elem Asap">
          <nuxt-link to="/Products">Products</nuxt-link>
        </li>
        <li class="link-elem Asap">
          <nuxt-link to="/Biography">Biography</nuxt-link>
        </li>
        <li class="link-elem Asap">
          <nuxt-link to="/News">News</nuxt-link>
        </li>
        <li class="link-elem Asap">
          <a
            href="https://twitter.com/ganja_tuber"
            target="_blank"
            rel="noopener"
          >
            <p class="text">Twitter</p>
            <font-awesome-icon class="icon" :icon="['fab', 'twitter']"
          /></a>
        </li>
        <li class="link-elem Asap">
          <a
            href="https://github.com/yoshiishunichi"
            target="_blank"
            rel="noopener"
          >
            <p class="text">GitHub</p>
            <font-awesome-icon class="icon" :icon="['fab', 'github']"
          /></a>
        </li>
      </ul>
      <button class="menu" @click="open()">
        <font-awesome-icon
          v-if="opening"
          :icon="['fas', 'times']"
          class="icon"
        />
        <font-awesome-icon v-else :icon="['fas', 'bars']" class="icon" />
      </button>
    </div>
    <div class="header-shadow" :class="{ openingshadow: opening }"></div>
  </div>
</template>

<script>
export default {
  data() {
    const opening = false
    return {
      opening,
    }
  },
  methods: {
    open() {
      this.opening = !this.opening
    },
  },
}
</script>

<style lang="scss" scoped>
$opening-headercontainer-height: 500px;
$opeing-header-height: 494px;

.header-container {
  height: 70px;
  width: 100vw;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 90;
}

.openingcontainer {
  height: $opening-headercontainer-height;
}

.header-content {
  height: 64px;
  width: 100vw;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 1;
}

.openingcontent {
  height: $opeing-header-height;
}

.header-shadow {
  height: 6px;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  opacity: 0.7;
  top: 64px;
  left: 0;
  position: absolute;
}

.openingshadow {
  top: $opeing-header-height;
}

.name-link {
  text-decoration: none;
  display: block;
}

.name {
  width: auto;
  font-size: 23px;
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  user-select: none;
  float: left;
}

.link-list {
  float: right;
  max-width: 500px;
  width: auto;
  top: 0;
  position: absolute;
  right: 0;
  height: 100%;
}

.link-elem {
  float: left;
  color: #fff;
  display: inline-block;
  letter-spacing: 0.5px;
  text-align: center;
  margin: 0 15px;
  line-height: 64px;
}

.link-elem:hover {
  color: black;
}

.text {
  display: inline;
}

.icon {
  display: inline-block;
  cursor: pointer;
}

.menu {
  display: none;
}

@media screen and (max-width: 900px) {
  .text {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .link-list {
    display: none;
  }

  .menu {
    display: inline;
    float: right;
    background: none;
    color: white;
    font-size: 25px;
    border: none;
    outline: none;
    margin-right: 20px;
    margin-top: 17.5px;
  }
}
</style>
