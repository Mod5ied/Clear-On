<template>
  <div id="home">
    <header class="navbar has-shadow" id="head">
      <h1 class="navbar-item" id="head-text">Faculties</h1>
      <router-link to="/" id="homeBtn">Home</router-link>
    </header>
    <main id="main">
      <section id="desc">
        <p class="desc">
          Here are the faculties that we know of.. click if you find yours.
          <br />
          If not found, don't panick we're working on it 😄
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
          delectus. Explicabo molestias magnam quo veniam aliquid enim excepturi
          sit animi dolorem, reprehenderit nisi minima, consectetur repellendus
          accusantium. Eos, architecto praesentium!
        </p>
      </section>
      <section id="list">
        <nav class="list-nav">
          <ion-icon class="icon1 one" name="calculator-outline"></ion-icon>
          <router-link to="/physcience" class="list-fac"
            >Physical Sciences</router-link
          >
          <ion-icon class="icon2" name="chevron-forward-outline"></ion-icon>
        </nav>
        <nav class="list-nav">
          <ion-icon class="icon1 two" name="cog-outline"></ion-icon>
          <router-link to="/engr" class="list-fac">Engineering Faculty</router-link>
          <ion-icon class="icon2" name="chevron-forward-outline"></ion-icon>
        </nav>
        <nav class="list-nav">
          <ion-icon class="icon1 three" name="heart-circle-outline"></ion-icon>
          <router-link to="/bioscience" class="list-fac"
            >Biological Sciences</router-link
          >
          <ion-icon class="icon2" name="chevron-forward-outline"></ion-icon>
        </nav>
        <nav class="list-nav">
          <ion-icon class="icon1 four" name="medkit-outline"></ion-icon>
          <!-- <span class="material-icons icon1 four"> health_and_safety </span> -->
          <!-- above is a google icon -->
          <router-link to="/pharm" class="list-fac">Pharmaceutical Sciences</router-link>
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
  name: "faculites",
};
</script>

<style lang="scss" scoped>
@import "@/scss/substyles/listings.scss";
</style>
