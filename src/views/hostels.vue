<template>
  <div id="home">
    <header class="navbar has-shadow" id="head">
      <ion-icon
        name="arrow-back-circle-outline"
        id="backBtn"
        class="hiddenDesktop"
        @click="goBack"
      ></ion-icon>
      <h1 class="navbar-item" id="head-text">Hostels</h1>
      <router-link to="/" id="homeBtn" class="hiddenMobile">Home</router-link>
    </header>
    <main id="main">
      <section id="desc">
        <img id="main-Img" alt="" class="hiddenDesktop" />
        <p class="desc">
          UNN hostel fee must be paid for those whose intent is to reside in the
          school hostels. The price range varies most sessions, but falls along
          the following prices:
        </p>
        <br />
        <p class="desc2">
          *️⃣Male Hostel = #12,000
          <br />
          *️⃣Female Hostel = #15,000 - #25,000
        </p>
        <br />
        <br />
        <p class="desc3">
          Please Note: To be able to qualify for hostel application, the student
          should have paid their respective tuition fees, as you need that to be
          able to apply.
          <br />
          Now to get more details about how to apply for and walk through the
          hostel clearance processes, click on the tabs below based on your
          gender:
        </p>
      </section>
      <section id="list">
        <nav class="list-nav">
          <i class="fas fa-male icon1 one"></i>
          <router-link to="/bHostel" class="list-fac">Boys Hostels</router-link>
          <ion-icon class="icon2" name="chevron-forward-outline"></ion-icon>
        </nav>
        <div></div>
        <nav class="list-nav">
          <i class="fas fa-female icon1 two"></i>
          <router-link to="/gHostel" class="list-fac"
            >Girls Hostels</router-link
          >
          <ion-icon class="icon2" name="chevron-forward-outline"></ion-icon>
        </nav>
      </section>
    </main>
   
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  name: "hostels",
  setup() {
    const reuter = useRouter();
    const methods = reactive({
      goBack: () => {
        return reuter.back(-1);
      }
    });
    return {
      ...toRefs(methods)
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/substyles/listings.scss";
</style>
