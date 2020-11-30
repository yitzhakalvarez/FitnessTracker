<template>
  <div class="Tracking">
    <!-- Navigation -->
    <UserNav ref="UserNav" />

    <!-- Header -->
    <div class="headerContainer">
      <div class="header">
        Daily Tracking
        <div class="line"></div>
      </div>
    </div>

    <!-- Tracking for tracked food values -->
    <div class="tracked-row">
      <div class="tracked-group">
        <div class="tracked-box">
          <div class="tracked-label">Calories</div>
          <div class="tracked-value" :style="stylePercent(caloriesPercent)">
            {{ caloriesPercent + "%" }}
          </div>
        </div>

        <div class="tracked-box">
          <div class="tracked-label">Carbs.</div>
          <div class="tracked-value" :style="stylePercent(carbsPercent)">
            {{ carbsPercent + "%" }}
          </div>
        </div>
      </div>
      <div class="tracked-group">
        <div class="tracked-box">
          <div class="tracked-label">Fat</div>
          <div class="tracked-value" :style="stylePercent(fatPercent)">
            {{ fatPercent + "%" }}
          </div>
        </div>

        <div class="tracked-box">
          <div class="tracked-label">Protein</div>
          <div class="tracked-value" :style="stylePercent(proteinPercent)">
            {{ proteinPercent + "%" }}
          </div>
        </div>
      </div>
    </div>

    <!-- Container for date selector -->
    <div class="dateSelectorContainer">
      <button
        id="dateSelector-PreviousBtn"
        class="btn backBtn"
        type="button"
        @click="decDate()"
      ></button>
      <input
        id="dateSelector-date"
        class="dateSelector-date"
        :value="
          date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
        "
        disabled
      />
      <button
        id="dateSelector-PreviousBtn"
        class="btn forwardBtn"
        type="button"
        @click="incDate()"
      ></button>
    </div>

    <!-- Container for a meal -->
    <div class="mealContainer" v-for="meal in mealArray" :key="meal.ID">
      <!-- Meal header -->
      <div class="mealHeaderContainer">
        <button
          class="btn removeMealBtn"
          :id="'removeMealBtn ' + meal.ID"
          type="button"
          @click="removeMeal(meal)"
        ></button>
        <input
          class="mealName"
          :id="'mealName ' + meal.ID"
          type="text"
          :value="meal.name"
          placeholder="Meal Name"
          disabled
        />
        <button
          class="btn editAndSaveMealBtn"
          type="button"
          @click="editAndSave(meal)"
        ></button>
      </div>

      <!-- Column Labels -->
      <div>
        <div class="col-label">Food Name</div>
        <div class="col-label">Amount</div>
        <div class="col-label">Calories</div>
        <div class="col-label">Carbs</div>
        <div class="col-label">Fat</div>
        <div class="col-label">Protein</div>
      </div>

      <!-- Print food in food array -->
      <div class="food-row" v-for="food in meal.foodArray" :key="food.ID">
        <div class="food">{{ food.foodName }}</div>
        <div class="food">{{ food.amount }}</div>
        <div class="food">{{ food.calories }}</div>
        <div class="food">{{ food.carbs }}</div>
        <div class="food">{{ food.fat }}</div>
        <div class="food">{{ food.protein }}</div>

        <button
          :id="'removeFoodBtn ' + food.ID"
          class="btn btn-removeFood"
          type="button"
          v-if="meal.editActive"
          @click="removeFood(food.ID)"
        ></button>
      </div>

      <!-- Food input -->
      <form :id="'foodForm ' + meal.ID" class="foodForm" v-if="meal.editActive">
        <input
          :id="'foodName ' + meal.ID"
          class="foodInput-box"
          type="text"
          placeholder="Food Name"
          required
        />
        <input
          :id="'amount ' + meal.ID"
          class="foodInput-box"
          type="text"
          placeholder="Amount"
          required
        />
        <input
          :id="'calories ' + meal.ID"
          class="foodInput-box"
          type="number"
          min="0"
          placeholder="Calories"
          required
        />
        <input
          :id="'carbs ' + meal.ID"
          class="foodInput-box"
          type="number"
          min="0"
          placeholder="Carbs"
          required
        />
        <input
          :id="'fat ' + meal.ID"
          class="foodInput-box"
          type="number"
          min="0"
          placeholder="Fat"
          required
        />
        <input
          :id="'protein ' + meal.ID"
          class="foodInput-box"
          type="number"
          min="0"
          placeholder="Protein"
          required
        />

        <button
          class="btn btn-addFood"
          type="button"
          @click="addFood(meal)"
        ></button>
      </form>

      <div class="meal-line"></div>
    </div>
    <!-- Container for a meal -->

    <input
      class="btn btn-addMeal"
      type="button"
      value="Add Meal"
      @click="addMeal()"
    />
  </div>
</template>

<script>
//Import methods for server access
import * as api from "@/services/api_access";
export default {
  components: {},
  data: function() {
    return {
      date: new Date(),
      mealArray: [],
      BMR: 0,
      caloriesPercent: 0,
      carbsPercent: 0,
      fatPercent: 0,
      proteinPercent: 0
    };
  },
  methods: {
    decDate() {
      this.date = new Date(this.date.setDate(this.date.getDate() - 1));
      this.getFood();
    },
    incDate() {
      this.date = new Date(this.date.setDate(this.date.getDate() + 1));
      this.getFood();
    },
    getFood() {
      var date =
        this.date.getMonth() +
        1 +
        "/" +
        this.date.getDate() +
        "/" +
        this.date.getFullYear();
      api.getDailyTracking_Meal(date).then(meals => {
        api.getDailyTracking_Food(date).then(food => {
          //Sort the meals by orderID
          meals.sort(function(meal1, meal2) {
            return meal1.orderID - meal2.orderID;
          });
          //Sort the food by orderID
          food.sort(function(food1, food2) {
            return food1.orderID - food2.orderID;
          });
          //Reset values
          var tempArray = this.mealArray;
          this.mealArray = [];
          //Load the meals into the mealArray
          for (var mealIndex = 0; mealIndex < meals.length; mealIndex++) {
            //If rendering the same meals keep the previous edit status
            var editActiveStatus = false;
            if (tempArray.length > 0 && mealIndex < tempArray.length) {
              if (tempArray[mealIndex].ID == meals[mealIndex].ID)
                editActiveStatus = tempArray[mealIndex].editActive;
            }
            //Push a new meal object
            var meal = {
              ID: meals[mealIndex].ID,
              name: meals[mealIndex].mealName,
              editActive: editActiveStatus,
              foodArray: []
            };
            this.mealArray.push(meal);
            //Load the food into the meals foodArray
            for (var foodIndex = 0; foodIndex < food.length; foodIndex++) {
              if (this.mealArray[mealIndex].ID == food[foodIndex].mealID)
                this.mealArray[mealIndex].foodArray.push(food[foodIndex]);
            }
          }

          //Track values
          var totalCalories = 0;
          var totalCarbs = 0;
          var totalFat = 0;
          var totalProtein = 0;
          for (var j = 0; j < this.mealArray.length; j++) {
            for (var jj = 0; jj < this.mealArray[j].foodArray.length; jj++) {
              totalCalories += this.mealArray[j].foodArray[jj].calories;
              totalCarbs += this.mealArray[j].foodArray[jj].carbs;
              totalFat += this.mealArray[j].foodArray[jj].fat;
              totalProtein += this.mealArray[j].foodArray[jj].protein;
            }
          }
          //Find Percentatge
          this.caloriesPercent =
            Math.round((totalCalories / this.BMR) * 100 * 10) / 10;
          this.carbsPercent =
            Math.round(((totalCarbs * 4) / (this.BMR * 0.4)) * 100 * 10) / 10;
          this.fatPercent =
            Math.round(((totalFat * 9) / (this.BMR * 0.3)) * 100 * 10) / 10;
          this.proteinPercent =
            Math.round(((totalProtein * 4) / (this.BMR * 0.3)) * 100 * 10) / 10;
        });
      });
    },

    stylePercent(percent) {
      if (percent < 90) return "color: orange;";
      else if (percent >= 95 && percent <= 105) return "color: green;";
      else return "color: red;";
    },
    addMeal() {
      var date =
        this.date.getMonth() +
        1 +
        "/" +
        this.date.getDate() +
        "/" +
        this.date.getFullYear();
      var orderID = this.mealArray.length;
      api.insertDailyTracking_Meal(date, orderID, "").then(mealInserted => {
        if (mealInserted == true) this.getFood();
      });
    },
    removeMeal(meal) {
      //Remove meal
      api.removeDailyTracking_Meal(meal.ID).then(mealRemoved => {
        if (mealRemoved == true) this.getFood();
      });
      //Remove food that was inside the meal
      for (var i = 0; i < meal.foodArray.length; i++) {
        var foodID = meal.foodArray[i].ID;
        api.removeDailyTracking_Food(foodID);
      }
    },
    editAndSave(meal) {
      meal.editActive = !meal.editActive;
      //Edit is true
      if (meal.editActive == true) {
        document.getElementById("mealName " + meal.ID).disabled = false;
        document.getElementById("mealName " + meal.ID).style.outline =
          "1px lightblue solid";
        document.getElementById("removeMealBtn " + meal.ID).style.visibility =
          "visible";
      }
      //Edit is false
      else {
        document.getElementById("mealName " + meal.ID).disabled = true;
        document.getElementById("mealName " + meal.ID).style.outline = "none";
        document.getElementById("removeMealBtn " + meal.ID).style.visibility =
          "hidden";
        api
          .editDailyTracking_Meal(
            meal.ID,
            meal.orderID,
            document.getElementById("mealName " + meal.ID).value
          )
          .then(mealChanged => {
            if (mealChanged == true) {
              this.getFood();
            }
          });
      }
    },
    //Add food
    addFood(meal) {
      //Get data
      var date =
        this.date.getMonth() +
        1 +
        "/" +
        this.date.getDate() +
        "/" +
        this.date.getFullYear();
      var foodName = document.getElementById("foodName " + meal.ID).value;
      var amount = document.getElementById("amount " + meal.ID).value;
      var calories = document.getElementById("calories " + meal.ID).value;
      var carbs = document.getElementById("carbs " + meal.ID).value;
      var fat = document.getElementById("fat " + meal.ID).value;
      var protein = document.getElementById("protein " + meal.ID).value;
      var orderID = meal.foodArray.length + 1; //Place the foodID at the end of the list
      //Send errors
      if (foodName == "") alert("Food Name Required");
      else if (amount == "") alert("Amount Required");
      else if (calories < 0 || carbs < 0 || fat < 0 || protein < 0)
        alert("Nutritional Values Can Not Be Negitive");
      else {
        //Insert food and refresh food data
        api
          .insertDailyTracking_Food(
            date,
            meal.ID,
            orderID,
            foodName,
            amount,
            calories,
            fat,
            carbs,
            protein
          )
          .then(foodInserted => {
            if (foodInserted == true) this.getFood();
          });
        //Remove values from input boxs
        document.getElementById("foodName " + meal.ID).value = "";
        document.getElementById("amount " + meal.ID).value = "";
        document.getElementById("calories " + meal.ID).value = "";
        document.getElementById("carbs " + meal.ID).value = "";
        document.getElementById("fat " + meal.ID).value = "";
        document.getElementById("protein " + meal.ID).value = "";
      }
    },
    //Remove food from database by ID
    removeFood(ID) {
      api.removeDailyTracking_Food(ID).then(foodRemoved => {
        if (foodRemoved == true) this.getFood();
      });
    }
  },
  mounted() {
    api.getUser().then(user => {
      if (user == "404") {
        api.logoutUser();
        this.$router.push("/");
      } else {
        this.BMR = user.BMR;
        this.getFood();
        window.onbeforeunload = function() {
          return "Warning - Reloading site will log you out";
        };
      }
    });
  }
};
</script>

<style scoped lang="scss">
/* Header */
.Tracking .headerContainer {
  width: 100%;
  text-align: center;
}
.Tracking .headerContainer .header {
  display: inline-block;
  padding: 20px;
  color: rgb(8, 8, 8);
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
}
.Tracking .headerContainer .header .line {
  width: 100%;
  margin: 0px auto 40px auto;
  border-bottom: 3px rgb(78, 73, 73) solid;
}

/* Tracking */
.Tracking .tracked-row {
  width: 70%;
  max-width: 1000px;
  margin: 0px auto 30px auto;
  padding: 10px;
  text-align: center;
  border-top: 3px silver solid;
  border-bottom: 3px silver solid;
}
.Tracking .tracked-row .tracked-group {
  display: inline-block;
  width: 50%;
}
.Tracking .tracked-row .tracked-group .tracked-box {
  display: inline-block;
  width: 50%;
  min-width: 150px;
}
.Tracking .tracked-row .tracked-group .tracked-box .tracked-label {
  font-size: 30px;
}
.Tracking .tracked-row .tracked-group .tracked-box .tracked-value {
  font-size: 30px;
}

/*
    Daily Tracking Date Selector 
*/
.Tracking .dateSelectorContainer {
  width: 80%;
  margin: 0px auto;
  text-align: center;
  margin-bottom: 30px;
}
.Tracking .dateSelectorContainer .btn {
  width: 70px;
  height: 40px;
  margin-top: -10px;
  background-color: green;
}
.Tracking .dateSelectorContainer .backBtn {
  background-image: url("../assets/backarrow-white.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}
.Tracking .dateSelectorContainer .dateSelector-date {
  display: inline-block;
  width: 10%;
  min-width: 200px;
  height: 40px;
  text-align: center;
  background: transparent;
  border: 0;
  font-size: 30px;
}
.Tracking .dateSelectorContainer .forwardBtn {
  background-image: url("../assets/forwardarrow-white.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

/*
    Planner plan Selector 
*/
.Tracking .planSelectorContainer {
  width: 100%;
  margin: 20px auto 30px auto;
  text-align: center;
}
.Tracking .selectPlanBtn {
  width: 40px;
  height: 40px;
  margin: -15px 1% 0px 1%;
  background-color: green;
  color: white;
  font-size: 25px;
  line-height: 10px;
}
.Tracking .addPlanBtn {
  width: 40px;
  height: 40px;
  margin: -15px 1% 0px 1%;
  background-color: green;
  background-image: url("../assets/add-white.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
}

/*
    Planner Name
*/
.Tracking .planContainer {
  width: 100%;
  margin: 20px auto 30px auto;
  text-align: center;
}
.Tracking .planName {
  width: 80%;
  margin: 10px 0px 30px 5%;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  border: none;
  border-bottom: 3px black solid;
  background: transparent;
}
.Tracking .editAndSavePlanBtn {
  width: 60px;
  height: 35px;
  margin-top: -20px;
  margin-left: 10px;
  background: lightgray;
  background-image: url("../assets/edit-black.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

/* Container */
.Tracking .mealContainer {
  width: 95%;
  margin: 0px auto;
  text-align: center;
}

.Tracking .mealContainer .mealHeaderContainer {
  width: 100%;
}
.Tracking .mealContainer .mealHeaderContainer .btn {
  display: inline-block;
  width: 6%;
  max-width: 150px;
  height: 40px;
  margin-top: -15px;
}
.Tracking .mealContainer .mealHeaderContainer .removeMealBtn {
  display: inline-block;
  background: red;
  background-image: url("../assets/close-white.png");
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
  visibility: hidden;
}
.Tracking .mealContainer .mealHeaderContainer .mealName {
  display: inline-block;
  width: 50%;
  max-width: 1000px;
  min-width: 200px;
  margin: 0px 3% 20px 3%;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  border: none;
  background: transparent;
}
.Tracking .mealContainer .mealHeaderContainer .editAndSaveMealBtn {
  background: lightgray;
  background-image: url("../assets/edit-black.png");
  background-size: 35px;
  background-repeat: no-repeat;
  background-position: center;
}

.Tracking .col-label {
  float: left;
  width: 15.5%;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
}

/* Food printing */
.Tracking .food-row {
  display: inline-block;
  width: 100%;
  height: 35px;
}
.Tracking .food {
  display: inline-block;
  width: 15.5%;
  height: 25px;
  margin-right: 5px;
  margin-bottom: 5px;
  text-align: center;
}

/* Food input */
.Tracking .foodInput-box {
  padding-left: 7px;
  margin: 10px 5px 0px 0px;
  width: 15.5%;
}

.Tracking .btn-addFood {
  width: 30px;
  height: 30px;
  margin-top: -5px;
  background-color: green;
  background-image: url("../assets/add-white.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}
.Tracking .btn-removeFood {
  width: 30px;
  height: 30px;
  background-color: red;
  background-image: url("../assets/close-white.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}

.Tracking .meal-line {
  width: 100%;
  border-bottom: 3px silver solid;
  margin: 40px 0px 70px 0px;
}

.Tracking .btn-addMeal {
  height: 1px;
  float: center;
  margin-bottom: 20px;
  line-height: 1px;
  font-size: 25px;
  background: green;
  color: white;
}
.Tracking .btn-removePlan {
  height: 33px;
  float: right;
  margin-right: 10%;
  margin-bottom: 30px;
  line-height: 10px;
  font-size: 25px;
  background: red;
  color: white;
  visibility: hidden;
}
</style>
