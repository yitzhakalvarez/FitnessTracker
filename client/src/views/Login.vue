<template>
<form>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box" @submit.prevent="login">
            <div class="field">
              <label for="" class="label">Username</label>
              <div class="control has-icons-left">
                <input type="username" id="Username" placeholder="username" class="input" v-model="username" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" id="loginPassword" placeholder="*******" class="input" v-model="password" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field is-grouped">
            <div class="control">
          <router-link to="/Login" class="button is-primary is-medium">Login</router-link>
            </div>
            <div class="control">
          <router-link to="/Register" class="button is-primary is-medium">Register?</router-link>
            </div>
                      
          </div>
          
          </form>
        </div>
      </div>
    </div>
  </div>
</form>
</template>

<script>
import { Feed } from "../models/Feed";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (context.login(this.username, this.password)) {
        this.$buefy.toast.open({
          message: "Successfully logged in",
          type: "is-success"
        });
        this.$router.push("Log");
      } else {
        this.$buefy.toast.open({
          message: "Login failed",
          type: "is-danger"
        });
      }
    }
  }
};
</script>