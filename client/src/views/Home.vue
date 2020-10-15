<template>
  <div class="home">
    <h1 class="title">
        Yitzhak's Fitness Tracker
      </h1>
      <p class="subtitle">
        This web application will change the way you eat and all that
        fun stuff. <br> "Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach." - <strong>Arnold Schwarzenegger</strong>
      </p>
         <div class="button-block">
          <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark">Sign Up to become a bodybuilder</button>
          <h3 v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark welcome">Welcome, {{ $auth.user.name }}!</h3>
        </div>
        <Nav />
  </div>
</template>

<script>
import List from '../views/List';
export default {
  name: 'home',
  components: {
    List
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    }
  }
}
</script>