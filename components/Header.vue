<template>
  <div class="header-container">
    <div class="header-content">
      <a class="name-link" href="/">
        <h3 class="name">Ganja_Tuber</h3>
      </a>
      <ul class="link-list">
        <li class="link-elem">
          <a>Products</a>
        </li>
        <li class="link-elem">
          <a>News</a>
        </li>
        <li class="link-elem">
          <a>Biography</a>
        </li>
        <li class="link-elem">
          <a>Twitter</a>
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
}

.name {
  font-size: 23px;
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  font-family: 'MakinasSquare';
  user-select: none;
}

.link-list {
  list-style: none;
  float: right;
  width: 450px;
  top: 0;
  position: absolute;
  right: 0;
  height: 100%;
}

.link-elem {
  font-family: 'Asap', sans-serif;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  width: 24%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 64px;
}

.link-elem:hover {
  color: black;
}
</style>
