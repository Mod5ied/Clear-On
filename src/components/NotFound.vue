<template>
  <center id="home">
    <h1>404 - Not Found</h1>
    <br />
    <p>The Resource you seek is unavailable yet.</p>
    <p>But you can still <router-link :to="{name: 'Home'}">go Home</router-link> </p>
  </center>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#home {
    height: 100vh;
    background: hsl(0, 0%, 20%);
    color: hsl(0, 0%, 90)
}
</style>
