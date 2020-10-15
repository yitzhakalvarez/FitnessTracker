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
            <div v-if="!$auth.loading">

            <a v-if="!$auth.isAuthenticated" @click="login" class="button is-light is-medium">Login</a>
            <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Log out</strong></a>
            </div>
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
export default {
  name: 'Nav',
  methods: {
  // Log the user in
  login() {
    this.$auth.loginWithRedirect();
  },
  // Log the user out
  logout() {
    this.$auth.logout({
      returnTo: window.location.origin
    });
  }
  }
}
</script>