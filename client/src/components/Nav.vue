<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <strong class="is-size-4">Fitness Tracker</strong>
    </a>
     <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu "  :class="{ 'is-active': isActive }">
    <div class="navbar-start">
      <router-link to="/"  class="navbar-item">Home</router-link>
      <router-link to="/about"  class="navbar-item">About</router-link>
      <router-link to="/posts" class="navbar-item">Posts</router-link>
    </div>
     <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <span v-if="isLoggedIn">
      <a @click="logout">Logout</a>
          </span>
    <span v-else>
          <router-link to="/login" class="button is-light">Login</router-link>
          <router-link to="/signup" class="button is-light">Sign Up</router-link>
    </span>
          </div>
    </div>
  </div>
    </div>
</nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>
