<template>
<form>
  <div id="app">
    <div class="section">
      <div class="container">
        <div class="media is-pulled-right">
          <div class="media-content"><span class="has-text-center">Connect With:</span><br/>
          <div class="field is-grouped">
            <div class="control">
              <div class="g-signin2"></div>
              </div>
              <div class="control">
                <button class="button githubSignin"><span class="github-icon icon"><i class="fab">github</i></span>
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
      <label class="label" for="username">Username</label>
      <div class="control has-icons-left">
        <input class="input" type="text" placeholder="Username" name="username" v-model="username"/><span class="icon is-left"><i class="fa">user</i></span>
      </div>
      <label class="label" for="email">Email</label>
      <div class="control has-icons-left">
        <input class="input" type="email" placeholder="Email" name="email" v-model="email"/><span class="icon is-left"><i class="fa">envelope-square</i></span>
      </div>
      <div class="columns row-one">
        <div class="column">
          <label class="label" for="firstName">First Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="First Name" name="firstName" v-model="first_name"/>
          </div>
        </div>
        <div class="column">
          <label class="label" for="lastName">Last Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Last Name" name="lastName" v-model="last_name"/>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <label class="label" for="password">Password</label>
          <div class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" name="password" v-model="password"/><span class="icon is-left"><i class="fa">key</i></span>
          </div>
        </div>
        <div class="column">
              <label class="label" for="retypePassword">Re-Type Password</label>
              <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Confirm Password" name="retypePassword" v-model="cpassword"/><span class="icon is-left"><i class="fa">lock</i></span>
      </div>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <router-link to="/login" class="button is-light is-medium">Cancel</router-link>
        </div>
        <div class="control">
          <button class="button is-primary is-medium" type="submit">Register</button>
        </div>
      </div>
    </div>
  </form>
</div>
</div>
</div>
</form>
</template>


<script>
    import * as api from '@/services/api_access';

    export default {
        components: {
        },
                methods: {
            signupUser() {
                //Send Errors
                if (heightFT < 0 || heightIN < 0 || weight < 0)
                    alert("Signup Info Can Not Be Negitive");
                else if (age < 15 || age >  80)
                    alert("Please Provide An Age Between 15 And 80");
                //Sign Up
                else {
                    var email = document.getElementById("signupEmail").value;
                    var username = document.getElementById("signupUsername").value;
                    var password = document.getElementById("signupPassword").value;
                    var gender = document.getElementById("signupGender").value;
                    var heightFT = document.getElementById("signupHeightFT").value;
                    var heightIN = document.getElementById("signupHeightIN").value;
                    var weight = document.getElementById("signupWeight").value;
                    var age = document.getElementById("signupAge").value;
                    var activityLevel = document.getElementById("signupActivity").value;
                    var weightGoals = document.getElementById("signupWeightGoals").value;
                    var BMR = 0;
                    if (gender == "M")
                        BMR = 66 + (6.23*weight) + (12.7*((heightFT*12) + (heightIN))) - (6.8*age) * activityLevel - weightGoals;
                    else if (gender == "F")
                        BMR = 655 + (4.35*weight) + (4.7*((heightFT*12) + (heightIN))) - (4.7*age) * activityLevel - weightGoals;

                    api.signupUser(email, username, password, gender, heightFT, heightIN, weight, age, activityLevel, weightGoals, BMR).then(
                        user => {
                            if (user == "409")
                                alert("Email or Username is taken");
                            else
                                this.$router.push('/profile');
                        }
                    );
                }
                //Prevent form submit refresh
                event.preventDefault();
            },
        mounted() {
            document.getElementById("register-form").addEventListener('submit', this.signupUser);
        }
    }
    }
</script>