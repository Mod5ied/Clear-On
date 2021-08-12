<template>
  <header id="head" class="navbar has-shadow">
    <i id="icon" class="navbar-burger navbar-start"
      ><ion-icon name="menu" id="burger"></ion-icon
    ></i>
    <h1 id="mytitle" class="navbar-item">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/header.scss";
</style>
