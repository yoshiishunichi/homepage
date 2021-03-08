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
            >Twitter</a
          >
        </li>
        <li class="link-elem">
          <a
            href="https://github.com/yoshiishunichi"
            target="_blank"
            rel="noopener"
            >GitHub</a
          >
        </li>
      </ul>
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
  z-index: 100;
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
  width: 500px;
  top: 0;
  position: absolute;
  right: 0;
  height: 100%;
}

.link-elem {
  font-family: 'MakinasFlat', sans-serif;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  width: 19%;
  letter-spacing: 0.5px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 64px;
}

.link-elem:hover {
  color: black;
}
</style>
