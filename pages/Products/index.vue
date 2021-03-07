<template>
  <div class="products-container container">
    <h4 class="page-title">Products</h4>
    <ul class="apps-list">
      <li class="apps-elem">
        <AppImage source="/images/DeadMan.png" link="/Products/DeadMan" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/GanjaKey.png" link="/Products/GanjaKey" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/DeadMan.png" link="/Products/DeadMan" />
      </li>
      <li class="apps-elem">
        <AppImage source="/images/DeadMan.png" link="/Products/DeadMan" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.apps-list {
  width: 95%;
}

.apps-elem {
  width: 24%;
  display: inline-block;
  text-align: center;
}
</style>
