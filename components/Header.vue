<template>
  <div class="header-container">
    <div class="header-content">
      <a class="name-link" href="/">
        <h3 class="name">Ganja_Tuber</h3>
      </a>
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
}
</style>
