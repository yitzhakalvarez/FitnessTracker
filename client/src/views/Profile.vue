<template>
  <div class="Profile">
    <!-- Loading -->
    <!-- Navigation -->
    <Nav ref="Nav" />

    <!-- Page Header -->
    <div class="headerContainer">
      <div class="header">
        Profile
        <div class="line"></div>
      </div>
    </div>

    <!-- Container for all information -->
    <form class="profileContainer" id="profileForm">
      <!-- Profile information section -->
      <div class="sectionContainer">
        <div class="section-label">Profile Info</div>

        <div class="inputLine">
          <div class="part-label">Name</div>

          <div class="form-inline">
            <input
              type="text"
              class="name-box form-control"
              id="firstName"
              placeholder="First Name"
            />
            <input
              type="text"
              class="name-box form-control"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>

      <!-- Nutrition information section -->
      <div class="sectionContainer">
        <div class="section-label">Nutritional Info</div>

        <div class="inputLine">
          <div class="part-label">Gender</div>

          <select
            id="gender"
            class="gender-box form-control"
            placeholder="Gender"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div class="inputLine">
          <div class="part-label">Height</div>

          <div class="height-row">
            <div class="height-col">
              <input
                type="number"
                class="height-box form-control"
                id="heightFT"
                min="3"
                max="7"
                placeholder="0"
              />
              <div class="height-unit">ft</div>
            </div>
            <div class="height-col">
              <input
                type="number"
                class="height-box form-control"
                id="heightIN"
                min="0"
                max="11"
                placeholder="0"
              />
              <div class="height-unit">in</div>
            </div>
          </div>
        </div>

        <div class="inputLine">
          <div class="part-label">Weight</div>

          <input
            type="number"
            class="input-box form-control"
            id="weight"
            min="50"
            placeholder="lb"
          />
        </div>

        <div class="inputLine">
          <div class="part-label">Age</div>

          <input
            type="number"
            class="input-box form-control"
            id="age"
            min="10"
            max="90"
            placeholder="years"
          />
        </div>

        <div class="inputLine">
          <div class="part-label">Activity Level</div>

          <select class="input-box form-control" id="activityLevel">
            <option value="1.000">Basal Metabolic Rate (BMR)</option>
            <option value="1.200">Sedentary - little to no exersize</option>
            <option value="1.375"
              >Lightly Active - exersize/sports 1-3 times a week</option
            >
            <option value="1.550"
              >Moderately Active - exersize/sports 3-5 times a week</option
            >
            <option value="1.725"
              >Very Active - exersize/sports 6-7 times a week</option
            >
            <option value="1.900"
              >Exrta Active - very hard exercise/sports or physical job</option
            >
          </select>
        </div>

        <div class="inputLine">
          <div class="part-label">Weight Goal</div>

          <select class="input-box section-end form-control" id="weightGoals">
            <option value="0">Maintain current weight</option>
            <option value="-1000">Lose 2 lb per week</option>
            <option value="-500">Lose 1 lb per week</option>
            <option value="500">Gain 1 lb per week</option>
            <option value="-1000">Gain 2 lb per week</option>
          </select>
        </div>
      </div>

      <!-- Account information section -->
      <div class="sectionContainer">
        <div class="section-label">Account Info</div>

        <div class="inputLine">
          <div class="part-label">Email</div>

          <input
            type="email"
            class="input-box form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        <div class="inputLine">
          <div class="part-label">Username</div>

          <input
            class="input-box form-control"
            id="username"
            placeholder="Username"
          />
        </div>

        <div class="inputLine">
          <div class="part-label">Password</div>

          <input
            class="input-box section-end form-control"
            id="password"
            placeholder="Password"
          />
        </div>
      </div>

      <button class="btn btn-success submitBtn" type="submit">
        Save Changes
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
/* Header */
.Profile .headerContainer {
  width: 100%;
  text-align: center;
}
.Profile .headerContainer .header {
  display: inline-block;
  padding: 20px;
  color: silver;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-size: 50px;
}
.Profile .headerContainer .header .line {
  width: 100%;
  margin: 0px auto 40px auto;
  border-bottom: 3px silver solid;
}

/* Profile Container */
.Profile .profileContainer {
  width: 80%;
  max-width: 1200px;
  margin: 0px auto 30px auto;
  padding: 0px 10px;
  text-align: center;
}
@media only screen and (max-width: 400px) {
  /*when the browser window is 400px wide or less:*/
  .Profile .profileContainer {
    width: 100%;
  }
}

.Profile .profileContainer .sectionContainer {
  margin-bottom: 30px;
}

.Profile .profileContainer .sectionContainer .section-label {
  margin-bottom: 10px;
  font-size: 30px;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  text-align: left;
}

.Profile .profileContainer .sectionContainer .inputLine {
  width: 100%;
  margin-bottom: 10px;
  text-align: left;
}

.Profile .profileContainer .sectionContainer .inputLine .part-label {
  width: 100%;
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
}

.Profile .profileContainer .sectionContainer .inputLine .input-box {
  width: 100%;
  max-width: 500px;
  margin-bottom: 10px;
}
.Profile .profileContainer .sectionContainer .inputLine .section-end {
  margin-bottom: 30px;
}

.Profile .profileContainer .sectionContainer .inputLine .name-box {
  display: inline-block;
  margin-right: 10px;
}
.Profile .profileContainer .sectionContainer .inputLine .gender-box {
  width: 100px;
}
.Profile .profileContainer .sectionContainer .inputLine .height-col {
  display: inline-block;
  width: 135px;
}
.Profile .profileContainer .sectionContainer .inputLine .height-box {
  display: inline-block;
  width: 90px;
}
.Profile .profileContainer .sectionContainer .inputLine .height-unit {
  display: inline-block;
  width: 30px;
  margin-top: 13px;
  margin-left: 5px;
}

.Profile .profileContainer .submitBtn {
  padding: 1em 2em;
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  font-weight: bold;
}
</style>

<script>
import * as api from "@/services/api_access";
export default {
  data() {
    return {
      access: false
    };
  },
  components: {},
  methods: {
    //Fill fields to match those in the user table for logged in user
    fillFields(user) {
      //Profile Info Section
      document.getElementById("firstName").value = user.firstName;
      document.getElementById("lastName").value = user.lastName;
      //Nutritional Info Section
      document.getElementById("gender").value = user.gender;
      document.getElementById("heightFT").value = user.heightFT;
      document.getElementById("heightIN").value = user.heightIN;
      document.getElementById("weight").value = user.weight;
      document.getElementById("age").value = user.age;
      document.getElementById("activityLevel").value = user.activityLevel;
      document.getElementById("weightGoals").value = user.weightGoals;
      //Profile Info Section
      document.getElementById("email").value = user.email;
      document.getElementById("username").value = user.username;
      document.getElementById("password").value = user.password;
    },
    //Update the user info
    updateUser() {
      //Get veriables
      var email = document.getElementById("email").value;
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var gender = document.getElementById("gender").value;
      var heightFT = document.getElementById("heightFT").value;
      var heightIN = document.getElementById("heightIN").value;
      var weight = document.getElementById("weight").value;
      var age = document.getElementById("age").value;
      var activityLevel = document.getElementById("activityLevel").value;
      var weightGoals = document.getElementById("weightGoals").value;
      var BMR = 0;
      if (gender == "M")
        BMR =
          66 +
          6.23 * weight +
          12.7 * (heightFT * 12 + heightIN) -
          6.8 * age * activityLevel -
          weightGoals;
      else if (gender == "F")
        BMR =
          655 +
          4.35 * weight +
          4.7 * (heightFT * 12 + heightIN) -
          4.7 * age * activityLevel -
          weightGoals;
      //Send Errors
      if (heightFT < 0 || heightIN < 0 || weight < 0)
        alert("Signup Info Can Not Be Negitive");
      else if (age < 15 || age > 80)
        alert("Please Provide An Age Between 15 And 80");
      //Update User
      else {
        api
          .updateUser(
            email,
            username,
            password,
            firstName,
            lastName,
            gender,
            heightFT,
            heightIN,
            weight,
            age,
            activityLevel,
            weightGoals,
            BMR
          )
          .then(user => {
            if (user == "409") alert("Username or Email is taken");
            else alert("Changes have been made");
          });
      }
      //Prevent form submit refresh
      event.preventDefault();
    },

    mounted() {
      api.getUser().then(user => {
        if (user == "404") {
          api.logoutUser();
          this.$router.push("/");
        } else {
          this.fillFields(user);
          document
            .getElementById("profileForm")
            .addEventListener("submit", this.updateUser);
          window.onbeforeunload = function() {
            return "Warning - Reloading site will log you out";
          };
        }
      });
    }
  }
};
</script>
