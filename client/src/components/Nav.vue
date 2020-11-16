<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/home">
    <img src="../assets/weight.png">
    <strong class="is-size-4">Fitness Tracker</strong>
    </a>
    
    <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">      
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    </a>
  </div>
  
  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">    
    <div class="navbar-start">
      <router-link to="/FitnessTracker/home" class="navbar-item">Home</router-link>
      <router-link to="/FitnessTracker/about" class="navbar-item">About</router-link>
  </div>
  
  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        <router-link to="/FitnessTracker/register" class="button is-primary">Register</router-link>
        <router-link to="/FitnessTracker/login" class="button is-light">Log in</router-link>
      </div>
    </div>
  </div>
</div>
</nav>
</template>

<script>
export default {
  data: ()=> ({
    isActive: ""
  }),
  methods: {
  }
}
</script>