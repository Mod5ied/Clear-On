<template>
  <div id="home">
    <app-header :title="title"></app-header>
    <main id="main">
      <section class="mySec">
        <p class="section-obj">
          We get you're very busy with what you're doing. You may be far off
          from inner school circle and need help with clearance. We've got your
          back.
          <br />
          Book an assitant to help You! Contact them using any of the social
          media links above.🤝
        </p>
      </section>
      <!--?xml version="1.0" standalone="no"?-->
      <svg
        id="svg-blob"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(7, 49, 107, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(8, 139, 8, 0.82)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M30.1,2.3C30.1,13.7,15,27.4,3.9,27.4C-7.3,27.4,-14.6,13.7,-14.6,2.3C-14.6,-9.1,-7.3,-18.2,3.9,-18.2C15,-18.2,30.1,-9.1,30.1,2.3Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s"
        ></path>
      </svg>
      <!--?xml version="1.0" standalone="no"?-->
      <svg
        id="svg-blob2"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(7, 49, 107, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(8, 139, 8, 0.82)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M13.4,0.9C13.4,9.2,6.7,18.4,-3,18.4C-12.7,18.4,-25.4,9.2,-25.4,0.9C-25.4,-7.3,-12.7,-14.6,-3,-14.6C6.7,-14.6,13.4,-7.3,13.4,0.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s"
        ></path>
      </svg>
      <!--?xml version="1.0" standalone="no"?-->
      <svg
        id="svg-blob3"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(7, 49, 107, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(8, 139, 8, 0.82)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M29.6,-12.8C35.3,-7.4,34.5,6.1,28.5,12.6C22.5,19.2,11.3,18.9,2.3,17.6C-6.6,16.3,-13.2,13.8,-18.2,7.9C-23.2,1.9,-26.5,-7.7,-23.2,-11.8C-19.9,-16,-10,-14.7,1,-15.3C12,-15.9,24,-18.3,29.6,-12.8Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
      <span id="social-icons">
        <nav class="social-icon-navs">
          <ion-icon class="icons one" name="logo-twitter"></ion-icon>
          <a
            href="https://twitter.com/messages/compose?recipient_id=1210501079617744897"
            target="_blank"
            class="route once"
            >Click to chat on Twitter
          </a>
          <ion-icon class="icon2" name="chevron-forward-outline"></ion-icon>
        </nav>
        <nav class="social-icon-navs">
          <ion-icon class="icons two" name="logo-whatsapp"></ion-icon>
          <a
            href="https://wa.me/2347013620343"
            target="_blank"
            class="route twice"
            >Click to chat on WhatsApp</a
          >
          <ion-icon class="icon2" name="chevron-forward-outline"></ion-icon>
        </nav>
      </span>
      <section class="mySec">
        <p class="section-obj">
          Our assistants are here to see that you get through clearance fast and
          easy.
          <br />
          Tney offer assistance ranging from Departmental - Hostel clearance,
          which of course is a pain would be better lifted off your shoulders.
          <br />
          Book an assitant to help You! Contact them using any of the social
          media links above.🤝
        </p>
      </section>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./PubHeader";
import footer from "./PubFooter";

export default {
  name: "Assist",
  components: {
    "app-header": header,
    "app-footer": footer,
  },
  data() {
    return {
      title: "Assist",
      displayed: true,
      hidden: true,
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/assist.scss";
</style>
