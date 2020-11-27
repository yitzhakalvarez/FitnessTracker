<template>
  <form>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-5-desktop is-3-widescreen">
            <form action="" class="box" @submit.prevent="login">
              <div class="field">
                <label for="" class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    type="username"
                    id="Username"
                    placeholder="username"
                    class="input"
                    v-model="username"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    id="loginPassword"
                    placeholder="*******"
                    class="input"
                    v-model="password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-primary is-medium" @click="login">
                    Login
                  </button>
                </div>
                <div class="control">
                  <button
                    class="button is-primary is-medium"
                    @click.prevent="fbLogin"
                  >
                    FB-Login
                  </button>
                </div>
                <div class="control">
                  <button
                    class="button is-primary is-medium"
                    @click.prevent="googleLogin"
                  >
                    Google Login
                  </button>
                </div>
                <div class="control">
                  <router-link
                    to="/Register"
                    class="button is-primary is-medium"
                    >Register?</router-link
                  >
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
import { context } from "../models/context";
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
        this.$router.push("schedule");
      } else {
        this.$buefy.toast.open({
          message: "Login failed",
          type: "is-danger"
        });
      }
    },
    fbLogin() {
      FB.login(
        function(authInfo) {
          console.log(authInfo);
        },
        { scope: "public_profile,email" }
      );
    },
    googleLogin() {}
  }
};
window.fbAsyncInit = function() {
  FB.init({
    appId: "385069659231960",
    cookie: true,
    xfbml: true,
    version: "v9.0"
  });

  FB.AppEvents.logPageView();
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
</script>
