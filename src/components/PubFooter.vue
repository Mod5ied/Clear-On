<template>
  <footer id="sticky" details="kind-of sticky at the bottom" class="navbar">
    <router-link to="/" class="navbar-item sticky-bar"
      ><ion-icon class="icons one" name="home-outline"></ion-icon
    ></router-link>
    <router-link to="/videos" class="navbar-item sticky-bar"
      ><ion-icon class="icons two" name="logo-youtube"></ion-icon
    ></router-link>
    <router-link to="/assist" class="navbar-item sticky-bar"
      ><ion-icon class="icons three" name="people-circle"></ion-icon
    ></router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/footer.scss";
</style>
