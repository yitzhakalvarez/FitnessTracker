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

/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
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
}

/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .hero {
  text-align: center;
  background-image: url("../assets/arnold.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 450px;
}
.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 35px;
}
.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 22px;
}
}

/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) 
  {
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
      font-size: 50px;
      }
    .subtitle {
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
      font-size: 25px;
      }
  }

/* ----------- iPhone 6+, 7+ and 8+ ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) {
        .hero {
      text-align: center;
      background-image: url("../assets/arnold.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 560px;
      }
    .hero-body .title {
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
      padding: 50px 0 20px 0;
      font-size: 55px;
      }
    .subtitle {
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
      font-size: 25px;
      }
}

/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
            .hero {
      text-align: center;
      background-image: url("../assets/arnold.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 630px;
      }
    .hero-body .title {
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
      padding: 50px 0 20px 0;
      font-size: 59px;
      }
    .subtitle {
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
      font-size: 30px;
      }
}
</style>
