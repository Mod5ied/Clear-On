<template>
  <div id="home">
    <header class="navbar has-shadow" id="head">
      <h1 class="navbar-item" id="head-text">Hostels</h1>
    </header>
    <main id="main">
      <section id="desc">
        <p class="desc">
          Below are two Hostel categories: choose from the list.
        </p>
      </section>
      <section id="list">
        <nav class="list-nav">
          <i class="fas fa-male  icon1 one"></i>
          <router-link to="/bHostel" class="list-fac">Boys Hostels</router-link>
          <ion-icon class="icon2" name="chevron-forward-outline"></ion-icon>
        </nav>
        <div></div>
        <nav class="list-nav">
          <i class="fas fa-female icon1 two"></i>
          <router-link to="/gHostel" class="list-fac">Girls Hostels</router-link>
          <ion-icon class="icon2" name="chevron-forward-outline"></ion-icon>
        </nav>
      </section>
    </main>
    <footer id="foot">
      <nav id="foot-nav">
        <router-link to="/" id="foot-text">Home</router-link>
        <span id="foot-style"></span>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: "hostels",
};
</script>

<style lang="scss" scoped>
@import "@/scss/substyles/listings.scss";
</style>
