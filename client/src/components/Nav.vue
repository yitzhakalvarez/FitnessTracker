<template>
    
    <nav class="navbar container is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/weight.png" height="28">
          <strong class="is-size-4">Fitness Tracker</strong>
        </a>

        <a role="button" class="navbar-burger burger" :class="{'is-active': isActive}" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">

    <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/tracker" class="navbar-item">Tracker</router-link>
        <router-link to="/feed" class="navbar-item">Feed</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Friends</a>

          <div class="navbar-dropdown">
            <a class = "navbar-item">
              <router-link to="/users" class="navbar-item">Add Friends</router-link>
            </a>
            <a class = "navbar-item">
                <router-link to="/friends" class="navbar-item"><strong>Friends</strong></router-link>
            </a>
          </div>
        </div>
         <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Admin
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                <router-link to="/admin" class="navbar-item">Users</router-link>
              </a>
            </div>
       </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
         <LoginBadge />
         <Signout />
      </div>
    </div>
    </div>
</nav>
</template>

<script>
import LoginBadge from "@/components/LoginBadge";
import Signout from "@/components/signout";
import session from "@/models/session";

export default {
   data: () => ({
       isActive: false,
       session,
       isAdmin: session.usertype
   }),
   methods: {

   },
   components: {
      LoginBadge,
      Signout
   }
}

</script>

<style>

</style>