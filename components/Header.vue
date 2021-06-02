<template>
  <div class="header-container" :class="{ openingcontainer: opening }">
    <div class="header-content back-color" :class="{ openingcontent: opening }">
      <nuxt-link class="name-link" to="/">
        <img
          class="name"
          src="/images/ganja_tuber.png"
          decoding="async"
          @click="close()"
        />
      </nuxt-link>
      <button class="menu" @click="open()">
        <font-awesome-icon
          v-if="opening"
          :icon="['fas', 'times']"
          class="icon"
        />
        <font-awesome-icon v-else :icon="['fas', 'bars']" class="icon" />
      </button>
      <ul class="link-list" :class="{ openiglist: listOpening }">
        <li
          class="link-elem Asap"
          :class="{ openigelem: opening }"
          @click="close()"
        >
          <nuxt-link to="/Products">Products</nuxt-link>
        </li>
        <li
          class="link-elem Asap"
          :class="{ openigelem: opening }"
          @click="close()"
        >
          <nuxt-link to="/Biography">Biography</nuxt-link>
        </li>
        <li
          class="link-elem Asap"
          :class="{ openigelem: opening }"
          @click="close()"
        >
          <nuxt-link to="/News">News</nuxt-link>
        </li>
        <li
          class="link-elem Asap"
          :class="{ openigelem: opening }"
          @click="close()"
        >
          <a
            href="https://twitter.com/ganja_tuber"
            target="_blank"
            rel="noopener"
          >
            <p class="text" :class="{ openingtext: opening }">Twitter</p>
            <font-awesome-icon class="icon" :icon="['fab', 'twitter']"
          /></a>
        </li>
        <li
          class="link-elem Asap"
          :class="{ openigelem: opening }"
          @click="close()"
        >
          <a
            href="https://github.com/yoshiishunichi"
            target="_blank"
            rel="noopener"
            @click="close()"
          >
            <p class="text" :class="{ openingtext: opening }">GitHub</p>
            <font-awesome-icon class="icon" :icon="['fab', 'github']"
          /></a>
        </li>
      </ul>
    </div>
    <div class="header-shadow" :class="{ openingshadow: opening }"></div>
  </div>
</template>

<script>
export default {
  data() {
    const opening = false
    const listOpening = false
    return {
      opening,
      listOpening,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.close()
    },
    open() {
      if (this.opening) {
        this.listOpening = false
        this.opening = false
      } else {
        this.opening = true
        setTimeout(() => {
          this.listOpening = true
        }, 250)
      }
    },
    close() {
      if (this.opening) {
        this.listOpening = false
        this.opening = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$opening-headercontainer-height: 300px;
$opeing-header-height: 294px;
$closing-headercontainer-height: 70px;
$closing-header-height: 64px;

.header-container {
  height: $closing-headercontainer-height;
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
  height: $closing-header-height;
  width: 100vw;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 1;
  transition: height 0.3s ease;
}

.openingcontent {
  height: $opeing-header-height;
}

.header-shadow {
  height: 6px;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  opacity: 0.7;
  top: $closing-header-height;
  left: 0;
  position: absolute;
  transition: top 0.3s ease;
}

.openingshadow {
  top: $opeing-header-height;
}

.name-link {
  text-decoration: none;
  display: block;
}

.name {
  height: 40px;
  margin-left: 25px;
  margin-top: 12px;
  margin-bottom: 12px;
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
  height: 64px;
  margin: 0 15px;
}

.link-elem:hover {
  color: black;
}

.link-elem a {
  font-size: 17px;
  line-height: 17px;
  display: inline-block;
  margin-top: 23.5px;
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
    position: relative;
    top: 17.5px;
  }

  .name {
    height: 30px;
    margin-top: 17px;
    margin-left: 20px;
  }
}

.openigelem {
  display: block;
  float: none;
  margin: 20px auto;
  height: 20px;
  width: 81px;
  line-height: 20px;
}

.openigelem a {
  display: inline-block;
}

.openiglist {
  margin-top: 70px;
  display: block;
  float: none;
  width: 100vw;
  height: 224px;
  position: relative;
  max-width: none;
}

.openingtext {
  display: inline;
}
</style>
