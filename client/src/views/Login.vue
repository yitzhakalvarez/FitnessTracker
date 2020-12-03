/* eslint-disable */
<template>
  <form>
    <div class="hero-body">
      <div class="container">
        <div class="row">
          <h2 style="text-align:center">Login with Social Media or Manually</h2>
          <div class="vl">
            <span class="vl-innertext">or</span>
          </div>
          <div class="col">
            <button class="fb btn" @click.prevent="fbLogin">
              <i class="fab fa-facebook"></i>
              Login with Facebook
            </button>
            <button class="google btn" @click.prevent="googleLogin">
              <i class="fab fa-google"></i>
              Login with Google
            </button>
            <button class="github btn" @click.prevent="githubLogin">
              <i class="fab fa-github"></i>
              Login with GitHub
            </button>
            <button class="twitter btn" @click.prevent="twitterLogin">
              <i class="fab fa-twitter"></i>
              Login with Twitter
            </button>
          </div>
          <div class="col">
            <div class="hide-md-lg">
              <p>Or sign in manually:</p>
            </div>
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
            <div class="control">
              <button class="login btn" @click="login">
                Login
              </button>
            </div>
          </div>
        </div>
        <div class="bottom-container">
          <div class="row">
            <div class="col">
              <router-link style="color:white" to="/register" class="btn"
                >Register</router-link
              >
            </div>
            <div class="col">
              <a style="color:white" class="btn">Forgot password?</a>
            </div>
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
    }
  }
};
</script>

<style>
/* style inputs and link buttons */
input,
.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 15px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}

input:hover,
.btn:hover {
  opacity: 1;
}

/* add appropriate colors to fb, twitter, google, github, login buttons */
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
/* style the submit button */
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

/* Two-column layout */
.col {
  float: left;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* vertical line */
.vl {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border: 2px solid #ddd;
  height: 220px;
}

/* text inside the vertical line */
.vl-innertext {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 8px 10px;
}

/* hide some text on medium and large screens */
.hide-md-lg {
  display: none;
}

/* bottom container */
.bottom-container {
  text-align: center;
  background-color: rgb(46, 45, 45);
  border-radius: 20px 20px 20px 20px;
}

/* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 650px) {
  .col {
    width: 100%;
    margin-top: 0;
  }
  /* hide the vertical line */
  .vl {
    display: none;
  }
  /* show the hidden text on small screens */
  .hide-md-lg {
    display: block;
    text-align: center;
  }
}
</style>
