<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to Yitzhak's Fitness Tracker
          </h1>
          <h2 class="subtitle">
            Make sure you register to keep up with your calories count.
          </h2>
          <div class="control">
            <router-link to="/register" class="btn button is-primary"
              >Register</router-link
            >
          </div>
        </div>
      </div>
    </section>
    <Nav />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url("../assets/arnold.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
}
.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}
.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}
</style>
