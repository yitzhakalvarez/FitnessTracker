<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
            <img src="../assets/arnold.jpg" />
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
    </div>
     <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/login" class="button is-light">Login</router-link>
          <router-link to="/register" class="button is-light">Sign Up</router-link>
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
    },
};
</script>
