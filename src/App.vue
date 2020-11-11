<template>
  <div class="container">
    <Navbar />
    <div class="top--svg--container">
      <img
        src="./assets/illustrations/top_drip.svg"
        alt="paint cloud"
        class="top--drip"
      />
    </div>
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
/* .top--svg--container {
  width: 0px;
  overflow: hidden;
} */

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top--drip {
  position: absolute;
  width: 100%;
  /* height: auto; */
  top: -100px;
  /* left: 200px; */
  z-index: -1;
  /* overflow: hidden; */
}
</style>
