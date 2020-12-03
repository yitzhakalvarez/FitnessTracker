<template>
  <form>
    <div id="app">
      <div class="section">
        <div class="container">
          <div class="media is-pulled-right">
            <div class="media-content">
              <span class="has-text-center">Connect With:</span><br />
              <div class="field is-grouped"></div>
              <div class="control">
                <button class="github button is-rounded githubSignin">
                  <span class="icon"><i class="fab fa-github"></i></span>
                  <p>Sign In</p>
                </button>
                <button class="google button is-rounded googleSignin">
                  <span class="icon"><i class="fab fa-google"></i></span>
                  <p>Sign In</p>
                </button>
                <button class="fb button is-rounded facebookSignin">
                  <span class="icon"><i class="fab fa-facebook"></i></span>
                  <p>Sign In</p>
                </button>
                <button class="twitter button is-rounded twitterSignin">
                  <span class="icon"><i class="fab fa-twitter"></i></span>
                  <p>Sign In</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="title">Sign Up</div>
        <div class="subtitle">With Your Email</div>

        <form id="register-form">
          <div class="field">
            <label class="label" for="username">Username:</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="Username"
                name="username"
                v-model="username"
              /><span class="icon is-left"><i class="fa">user</i></span>
            </div>
            <label class="label" for="email">E-Mail:</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="email"
                placeholder="Email"
                name="email"
                v-model="email"
              /><span class="icon is-left"
                ><i class="fa">envelope-square</i></span
              >
            </div>
            <div class="columns row-one">
              <div class="column">
                <label class="label" for="firstName">First Name:</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    v-model="firstname"
                  />
                </div>
              </div>
              <div class="column">
                <label class="label" for="lastName">Last Name:</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    v-model="lastname"
                  />
                </div>
              </div>
            </div>
            <div class = "columns">
              <div class = "column is-one-third">
                <div class="field">
                  <label class="label" for="year">Year:</label>
                  <div class="control has-icons-left">
                    <input class="input" type="number" placeholder="year" v-model="year">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                      </span>
                      </div>
                      </div>
                      </div>
              <div class = "column is-one-third">
      <div class="field">
        <label class="label">Month:</label>
        <div class="control has-icons-left">
          <input class="input" type="number" placeholder="month-number" v-model="month">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
  </div>
  <div class = "column is-one-third">
      <div class="field">
        <label class="label">Day:</label>
        <div class="control has-icons-left">
          <input class="input" type="number" placeholder="day-number" v-model="day">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
  </div>
</div>
            <div class="columns">
              <div class="column">
                <label class="label" for="password">Password:</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    v-model="password"
                  /><span class="icon is-left"><i class="fa">key</i></span>
                </div>
              </div>
              <div class="column">
                <label class="label" for="retypePassword"
                  >Re-Type Password:</label
                >
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="Confirm Password"
                    name="retypePassword"
                    v-model="cpassword"
                  /><span class="icon is-left"><i class="fa">lock</i></span>
                </div>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <router-link
                  to="/login"
                  class="button is-danger is-medium is-rounded"
                  >Cancel</router-link
                >
              </div>
              <div class="control">
                <button
                  class="button is-primary is-medium is-rounded"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </form>
</template>

<script>
import session from "@/models/session";
import { register } from "@/models/users";
export default {
     data:() => ({
        email: '', 
        password: '',
        cpassword:'',
        username: '',
        firstname: '',
        lastname: '',
        year: 0,
        month: 0,
        day: 0,
    }),
    methods: {
       async signup(){
          const dob = this.year + '-' + this.month + '-' + this.day;
          await register(this.username, this.firstname, this.lastname, dob, this.password, this.cpassword, this.email);
          session.addNotification('Registration Successfully');
          this.$router.push('Login');
       },
    }
}
</script>

<style>
.fb {
  background-color: #3b5998;
  color: white;
}

.github {
  background-color: #504848;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}
.login {
  background-color: #24d85a;
  color: white;
}

.twitter {
  background-color: #55acee;
  color: white;
}
</style>