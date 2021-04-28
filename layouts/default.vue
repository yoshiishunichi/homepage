<template>
  <div>
    <Header ref="header" />
    <div @click="parentEvent">
      <Nuxt />
      <transition name="button">
        <button
          v-show="buttonActive"
          class="top-btn back-color"
          @click="returnTop"
        >
          <font-awesome-icon :icon="['fas', 'chevron-up']" class="top-icon" />
        </button>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    Header,
  },
  data() {
    return {
      buttonActive: false,
      scroll: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    parentEvent() {
      this.$refs.header.close()
    },
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    scrollWindow() {
      const top = 210
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.button-enter-active,
.button-leave-active {
  transition: opacity 0.5s;
}

.button-enter,
.button-leave-to {
  opacity: 0;
}

.top-btn {
  position: fixed;
  bottom: 51px;
  right: 30px;
  width: 42px;
  height: 42px;
  outline: none;
  color: white;
  border-radius: 21px;
  cursor: pointer;
  border: 0.1px solid rgb(3, 55, 107);
  box-shadow: 3px 8px 15px rgba(0, 0, 0, 0.6);
}
</style>
