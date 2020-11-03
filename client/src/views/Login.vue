<template>
<form>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box" @submit.prevent="login">
            <div class="field">
              <label for="" class="label">Username or email address</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="me@gmail.com | username" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" required>
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
          <router-link to="/SignUp" class="button is-primary is-medium">Register?</router-link>
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
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
          await this.LogIn(User);
          this.$router.push("/log");
          this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>