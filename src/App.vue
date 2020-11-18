<template>
  <div class="container">
    <Navbar />

    <img
      src="./assets/illustrations/top_drip.svg"
      alt="paint cloud"
      class="top--drip"
    />

    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top--drip {
  position: absolute;
  right: 0;
  top: -80px;
  z-index: -1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 1100px) {
  .top--drip {
    display: none;
  }
}
</style>
