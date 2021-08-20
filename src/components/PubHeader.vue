<template>
  <header id="head" class="navbar has-shadow">
    <i id="icon" class="navbar-burger navbar-start"
      ><ion-icon name="menu" id="burger" @click="toggleMenu"></ion-icon
    ></i>
    <h1 id="mytitle" class="navbar-item">{{ title }}</h1>
    <nav id="dropdown">
      <nav id="dropdown-links">
        <router-link to="" class="links">Videos</router-link>
        <router-link  to="" class="links">Assist</router-link>
      </nav>
      <nav class="dropdown-items">
        <section id="dropdown-videos">
          <h2>Videos 📹</h2>
          <h3 id="vid-info">Below are videos to help you get cleared🙂</h3>
          <section id="section">
            <nav class="section-cards">
              <h3>Faculty Clearance Videos</h3>
              <i></i>
            </nav>
            <nav class="section-cards">
              <h3>Hostel Clearance Videos</h3>
              <i></i>
            </nav>
            <nav class="section-cards">
              <h3>Final Year Clearance Videos</h3>
              <i></i>
            </nav>
          </section>
        </section>
        <section id="dropdown-assist">
          <h2 id="title">Get Assistance from Us</h2>
          <p id="assist-info">
            We get you're very busy with what you're doing. You may be far off
            from inner school circle and need help with clearance. We've got
            your back.
            <br />
            Book an assitant to help You! Contact them using any of the social
            media links above.🤝
          </p>
          <section id="social-icons">
            <nav class="social-icon-navs">
              <a
                href="https://twitter.com/messages/compose?recipient_id=1210501079617744897"
                target="_blank"
                class="route once"
                >Click to chat on Twitter
              </a>
              <ion-icon class="icons one" name="logo-twitter"></ion-icon>
            </nav>
            <nav class="social-icon-navs">
              <a
                href="https://wa.me/2347013620343"
                target="_blank"
                class="route twice"
                >Click to chat on WhatsApp</a
              >
              <ion-icon class="icons two" name="logo-whatsapp"></ion-icon>
            </nav>
          </section>
        </section>
      </nav>
    </nav>
    <nav class="navbar-menu navbar-end" id="myNavbar-menu">
      <router-link to="" class="navbar-item" id="navbar-item"
        >LogIn</router-link
      >
      <router-link to="" class="navbar-item" id="navbar-item"
        >SignIn</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    toggleMenu() {
      document
        .getElementById("myNavbar-menu")
        .classList.toggle("myNavbar-menu");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/header.scss";
</style>
