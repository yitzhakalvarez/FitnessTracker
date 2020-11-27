<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/weight.png" />
        <strong class="is-size-4">Fitness Tracker</strong>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/schedule" class="navbar-item">Schedule</router-link>
        <router-link
          to="/dashboard"
          v-if="ctx.user !== null && ctx.user.admin"
          class="navbar-item"
          >Dashboard</router-link
        >
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              v-if="ctx.user === null"
              to="/register"
              class="button is-primary is-rounded"
              >Register</router-link
            >
            <router-link
              v-if="ctx.user === null"
              to="/login"
              class="button is-light is-rounded"
              >Log in</router-link
            >
            <button
              v-if="ctx.user !== null"
              class="button is-primary"
              @click="logout"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { context } from "../models/context";

export default {
  data() {
    return {
      ctx: context.state,
      isActive: false
    };
  },
  methods: {
    logout() {
      context.logout();
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
