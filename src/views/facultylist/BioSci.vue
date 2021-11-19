<template>
  <!-- USE SLOTS HERE TO SHOW AND HIDE CONTENTS in future-->
  <div id="home">
    <header class="navbar has-shadow" id="head">
      <router-link to="/" class="home">Home</router-link>
      <h1 id="head-title" class="navbar-item">Biological Sciences</h1>
      <ion-icon
        name="menu"
        class="navbar-item navbar-end"
        id="burger"
        @click="show = !show"
      ></ion-icon>
      <!-- Hidden by default -->
      <nav class="navbar-item" id="menu" v-show="show">
        <router-link to="/bioscience" class="navbar-item menu-routes active"
          >Bio. Sciences</router-link
        >
        <router-link to="/physcience" class="navbar-item menu-routes"
          >Phy. Sciences</router-link
        >
        <router-link to="/engr" class="navbar-item menu-routes"
          >Engineering</router-link
        >
        <router-link to="/pharm" class="navbar-item menu-routes"
          >Pharmacy</router-link
        >
      </nav>
    </header>
    <main id="main">
      <section class="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in optio
        maiores. Expedita soluta amet optio doloribus voluptas quasi, totam
        explicabo accusamus nam tenetur libero quas aliquam rem temporibus
        voluptates nostrum dolorem eius? Qui voluptatum exercitationem molestiae
        dolorum perferendis inventore, fugit culpa natus libero alias ab
        deleniti provident laborum dicta! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ducimus voluptatem aliquid voluptate! Autem fugiat
        aperiam, distinctio eius ea, hic minus minima cumque neque ipsum quas
        quidem quod quibusdam voluptatem, cum quam ut itaque natus libero. Eum
        rerum tempore dolore officiis voluptate nostrum ad ipsum. Eveniet dicta
        id expedita rem dolorem!
      </section>
    </main>
    <footer class="navbar" id="foot">
      <nav class="navbar-item" id="foot-style">
        <router-link to="/" id="foot-text">Home</router-link>
        <span id="span"></span>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/facultylist/allFaculty";
</style>
