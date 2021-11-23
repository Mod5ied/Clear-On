<template>
  <div class="home">
    <app-header :title="title"></app-header>
    <main id="main">
      <svg id="svg1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#07316B"
          d="M25.6,-48.1C33.3,-39.9,39.7,-33.3,50.3,-25.5C60.9,-17.8,75.7,-8.9,77.7,1.1C79.6,11.2,68.8,22.3,62,36.6C55.1,50.9,52.3,68.2,42.6,74.5C33,80.8,16.5,76,1.9,72.8C-12.7,69.5,-25.5,67.8,-37.8,63.1C-50.1,58.3,-62,50.5,-71.6,39.5C-81.2,28.4,-88.6,14.2,-85.8,1.6C-83.1,-11,-70.2,-22.1,-60.3,-32.7C-50.5,-43.3,-43.7,-53.6,-34.1,-60.7C-24.6,-67.9,-12.3,-71.9,-1.7,-69C9,-66.2,17.9,-56.4,25.6,-48.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <section id="main-section">
        <h2 id="greets">Hello There!</h2>
        <p id="info">
          ClearOn is a platform that helps and serves as a guide for you to get through the
          rigorous and confusing process of school clearance ranging from
          Faculty to Final year clearance. It also offers useful tips to get you
          settled into the school life and attain your best with less stress.
        </p>
        <p id="date" details="bolder 4 date">
          Today: November{{ month }},{{ day }},{{ year }}
        </p>
        <img :src="unn" alt="" id="mainImage" loading="lazy" />
      </section>
      <!-- Scroll Section Here -->
      <!-- The image should be hidden in mobile view -->
      <section id="scroll-section">
        <img loading="lazy" alt="" id="scrollImage" class="hiddenMobile"/>
        <p class="hiddenMobile">
          Clearance process is indeed a stressful one and we well understand
          this, hence we've carefully decided and compiled the best possible way
          to go through this without stress. Go through our collection of
          clearanace guides and select the one you wish to undertake and see how
          easy it gets with Clearon.
        </p>
        <nav class="main-cards" id="card1">
          <svg
            id="svg2"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#07316B"
              d="M43.5,-28.2C57,-17.8,68.9,0.3,65.1,13.9C61.2,27.5,41.6,36.6,21.9,46.5C2.1,56.5,-17.7,67.2,-36.4,63.1C-55.2,58.9,-72.8,39.8,-73.7,21.1C-74.5,2.4,-58.7,-15.9,-43.6,-26.7C-28.6,-37.5,-14.3,-40.8,0.4,-41.1C15,-41.4,30.1,-38.7,43.5,-28.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <i class="fas fa-school" id="card-icon"></i>
          <h3>Faculty Clear</h3>
          <router-link to="/faculties" id="proceed">Proceed</router-link>
        </nav>
        <nav class="main-cards" id="card2">
          <svg
            id="svg3"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#07316B"
              d="M59,-38C74.1,-28.1,82.3,-3.7,75.3,13.2C68.3,30.2,46,39.6,27.9,42.3C9.8,45,-4,41,-20.4,35.6C-36.9,30.3,-56,23.7,-60.5,11.6C-65,-0.5,-55,-18.2,-42.5,-27.6C-30,-36.9,-15,-37.9,3.5,-40.7C21.9,-43.4,43.9,-47.9,59,-38Z"
              transform="translate(100 100)"
            />
          </svg>
          <i class="fas fa-bed" id="card-icon"></i>
          <h3>Hostels Clear</h3>
          <router-link to="/hostels" id="proceed">Proceed</router-link>
        </nav>
        <nav class="main-cards" id="card3">
          <svg
            id="svg4"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#07316B"
              d="M63.8,-42.6C79.2,-31.6,85.7,-5.3,77,11.3C68.2,27.9,44.1,34.8,22.1,45.1C0,55.5,-20.1,69.4,-31.1,64.2C-42.2,59,-44.3,34.8,-43.8,16.1C-43.2,-2.7,-40,-16,-32.3,-25.3C-24.5,-34.5,-12.3,-39.7,6,-44.5C24.2,-49.3,48.5,-53.6,63.8,-42.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <i class="fas fa-user-graduate" id="card-icon"></i>
          <h3>Finals Clear</h3>
          <router-link to="/finals" id="proceed">Proceed</router-link>
        </nav>
      </section>
      <!-- ADS HERE -->
      <section id="ad-sec1">
        <h4 id="title">SEARCHING FOR A LODGE?</h4>
        <p id="info">
          UnnHousing has got you covered! The platform has a ton of beautiful
          and affordable lodges at distinct locations in and around UNN. The
          avalable lodges are presented in price ranges, from affordable to
          luxurios to suit your needs. Click on - UnnHousing below to check them
          out, and don't forget to recommend ClearOn to friends!
        </p>
        <a href="https://www.unnhousing.com/" id="ad-link">
          <img src="@/assets/UnnHouse-logo.png" alt="" />
        </a>
      </section>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity";
import scrollImage from "../assets/images/gradFinals.jpg";
import unn from "../assets/unn.jpg";
import footer from "./PubFooter.vue";
import header from "./PubHeader.vue";

export default {
  name: "Home",
  data() {
    return {
      title: "ClearOn",
      displayed: true,
      hidden: true,
      unn: unn,
      scrollImage: scrollImage,
    };
  },
  components: {
    "app-header": header,
    "app-footer": footer,
  },
  setup() {
    let myDate = new Date();
    let day = myDate.getDay();
    let year = myDate.getFullYear();
    // let title = ref("ClearOn");

    return { day, year };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/homepage.scss";
</style>
