<template>
  <div class="main">
    <app-header :title="title"></app-header>
    <main id="main">
      <h1 id="head-text">Below are videos to help you get cleared🙂</h1>
      <section id="section">
        <nav class="section-cards">
          <h3>Faculty Clearance Videos</h3>
          <span>3 clips</span>
        </nav>
        <nav class="section-cards">
          <h3>Hostel Clearance Videos</h3>
          <span>5 clips</span>
        </nav>
        <nav class="section-cards">
          <h3>Final Year Clearance Videos</h3>
          <span>8 clips</span>
        </nav>
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
              stop-color="rgba(7, 49, 107, 0.79)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(7, 49, 107, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M25,-1C25,11.5,12.5,23,-1.4,23C-15.4,23,-30.8,11.5,-30.8,-1C-30.8,-13.5,-15.4,-27.1,-1.4,-27.1C12.5,-27.1,25,-13.5,25,-1Z"
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
              stop-color="rgba(7, 49, 107, 0.79)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(7, 49, 107, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M13.3,8.3C7.5,17.6,-13.5,18.8,-18.2,10C-23,1.2,-11.5,-17.5,-1,-18C9.5,-18.6,19,-1.1,13.3,8.3Z"
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
              stop-color="rgba(7, 49, 107, 0.79)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(7, 49, 107, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M11.2,6.2C6.5,14.6,-10.8,15.4,-14.7,7.4C-18.7,-0.5,-9.4,-17.3,-0.7,-17.7C8,-18.1,15.9,-2.2,11.2,6.2Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s"
        ></path>
      </svg>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./PubHeader";
import footer from "./PubFooter";
export default {
  name: "Videos",
  components: {
    "app-header": header,
    "app-footer": footer,
  },
  data() {
    return {
      title: "Videos",
      displayed: true,
      hidden: true,
    };
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/videos.scss";
</style>
