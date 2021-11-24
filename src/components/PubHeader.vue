<template>
  <header id="head" class="navbar has-shadow">
    <i id="icon" class="navbar-burger navbar-start"
      ><ion-icon name="menu" id="burger" @click="toggleMenu"></ion-icon
    ></i>
    <h1 id="mytitle" class="navbar-item">{{ title }}</h1>
    <nav id="dropdown">
      <nav class="dropdown-items">
        <section id="dropdown-videos" class="hideVideos">
          <i class="far fa-times-circle cancel" @click="dropVideos"></i>
          <h2 id="title">Videos 📹</h2>
          <h3 id="vid-info">
            Below are videos to help you get cleared. The video guides should
            help you go through this process with less hassle than most people
            who don't. You're naturally ahead!🙂
          </h3>
          <section id="video-section">
            <nav class="section-cards">
              <i class="fas fa-school card-icon one"></i>
              <router-link to="" id="route"
                >Faculty Clearance Videos</router-link
              >
            </nav>
            <nav class="section-cards">
              <i class="fas fa-bed card-icon two"></i>
              <router-link :to="{name: 'VideosPage'}" id="route"
                >Hostel Clearance Videos</router-link
              >
            </nav>
            <nav class="section-cards">
              <i class="fas fa-user-graduate card-icon three"></i>
              <router-link to="" id="route"
                >Final Year Clearance Videos</router-link
              >
            </nav>
          </section>
        </section>
        <section id="dropdown-assist" class="hideAssist">
          <i class="far fa-times-circle cancel" @click="dropAssist"></i>
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
      <!-- <nav id="dropdown-links"> -->
      <h3 class="navbar-item hiddenMobile" id="navbar-item" @click="dropVideos" title="Click to close😉">Videos</h3>
      <h3 class="navbar-item hiddenMobile" id="navbar-item" @click="dropAssist" title="Click to close😉">Assist</h3>
      <!-- </nav> -->
      <span id="separator"></span>
      <router-link
        to=""
        class="navbar-item"
        id="navbar-item"
        title="Feature not ready😟"
        >Log-In</router-link
      >
      <router-link
        to=""
        class="navbar-item"
        id="navbar-item"
        title="Feature not ready😟"
        >Sign-In</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      document
        .getElementById("myNavbar-menu")
        .classList.toggle("myNavbar-menu");
    },
    dropVideos() {
      document.getElementById("dropdown-videos").classList.toggle("showVideos");
    },
    dropAssist() {
      document.getElementById("dropdown-assist").classList.toggle("showAssist");
    },
    /**   
     * * Write an coditional that dropShows each only when the other is not shown
     * */ 
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/header.scss";
</style>
