<template>
  <div class="header-container">
    <div class="header-content back-color">
      <nuxt-link class="name-link" to="/">
        <h3 class="name">Ganja Tuber</h3>
      </nuxt-link>
      <ul class="link-list">
        <li class="link-elem">
          <nuxt-link to="/Products">Products</nuxt-link>
        </li>
        <li class="link-elem">
          <nuxt-link to="/News">News</nuxt-link>
        </li>
        <li class="link-elem">
          <nuxt-link to="/Biography">Biography</nuxt-link>
        </li>
        <li class="link-elem">
          <a
            href="https://twitter.com/ganja_tuber"
            target="_blank"
            rel="noopener"
          >
            <p class="text">Twitter</p>
            <font-awesome-icon class="icon" :icon="['fab', 'twitter']"
          /></a>
        </li>
        <li class="link-elem">
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
      <button class="menu">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
    <div class="header-shadow"></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  height: 70px;
  width: 100vw;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 90;
}

.header-content {
  height: 64px;
  width: 100vw;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 1;
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
  font-family: 'MakinasSquare', sans-serif;
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
  font-family: 'MakinasFlat', sans-serif;
  float: left;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
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
  display: inline-block;
}

.icon {
  display: inline-block;
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
    display: block;
    float: right;
    background: none;
    color: white;
    font-size: 25px;
    border: none;
    outline: none;
    line-height: 64px;
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
