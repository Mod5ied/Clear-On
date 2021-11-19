<template>
  <center id="home">
    <h1>404 - Page Not Found</h1>
    <br />
    <p>The Resource you seek is unavailable yet.</p>
    <p>
      But you can still
      <router-link id="route" :to="{ name: 'Home' }">Go Home</router-link>
    </p>
  </center>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/presets";
#home {
  @include flexLayout(column);
  @include column(center);
  @include row(center);
  height: 100vh;
  background: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 90%);

  h1 {
    font: $weight-prim 1.3rem $font-sec;
  }
  #route:hover {
    color: hsl(0, 0%, 70%);
    border: 1px solid #135bbf;
    border-radius: .4rem;
    padding: 0 .3rem;
    font-size: .89rem;
  }
}
</style>
