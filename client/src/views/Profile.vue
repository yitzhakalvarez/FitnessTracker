<template>
<div class="container">
  <div class = "section">
    <h2 class="title is-2 has-text-left" id="name">
      {{User.CurrentUser.Name}}     
    </h2>
    <div>
      <div id="pic-goal">
        <img :src="User.CurrentUser.Picture" class="card-image" />
        <div id="status" v-if="User.CurrentUser.Goal == 'maintain'">
         <span id="status-first">Goal:</span> Maintain Weight
        </div>
        <div id="status" v-else-if="User.CurrentUser.Goal == 'loseOne'">
          <span id="status-first">Goal:</span> Lose One Pound Per Week
        </div>
        <div id="status" v-else-if="User.CurrentUser.Goal == 'loseTwo'">
          <span id="status-first">Goal:</span> Lose Two Pounds Per Week
        </div>
        <div id="status" v-if="User.CurrentUser.Goal == 'gainOne'">
          <span id="status-first">Goal:</span> Gain One Pound Per Week
        </div>
        <div id="status" v-if="User.CurrentUser.Goal == 'gainTwo'">
          <span id="status-first">Goal:</span> Gain Two Pounds Per Week
        </div>
      </div>
          <div id="food-goal" class="box">
            <table id="food-table" class="table has-text-centered">
              <caption><h4 class="title is-4">Daily Food Goals</h4></caption>
              <thead>
                <tr>
                  <th>Nutrient</th>
                  <th>Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td>{{User.CurrentUser.EER.toFixed(0)}}</td>
                </tr>
                <tr>
                  <td>Protein(g)</td>
                  <td>{{User.CurrentUser.DRI.Protein}}</td>
                </tr>
                <tr>
                  <td>Carbs(g)</td>
                  <td>{{User.CurrentUser.DRI.LowCarb}}-{{User.CurrentUser.DRI.HighCarb}}</td>
                </tr>
                <tr>
                  <td>Fat(g)</td>
                  <td>{{User.CurrentUser.DRI.LowFat}}-{{User.CurrentUser.DRI.HighFat}}</td>
                </tr>
                <tr>
                  <td>Sodium(mg)</td>
                  <td>{{User.CurrentUser.DRI.Sodium}}</td>
                </tr>
                <tr>
                  <td>Sugar(g)</td>
                  <td>{{User.CurrentUser.DRI.Sugar}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="ex-goal">
            <div class="box">
              <h4 class="title is-4">Daily Exercise Goals</h4>
                <p class="has-text-centered">30 minutes of moderate or vigorous exercise</p>
            </div>
          </div>
          <div id="bmi-section" class="section">
            <div class="box">
              <h6 class="title is-6" id="status-first">Body Mass Index (BMI): <span id="bmi">{{User.CurrentUser.BMI}}</span></h6>
              <div v-if="User.CurrentUser.BMI < 18.5">
                <p>You are Underweight - A Normal BMI is between 18.5-24.9</p>
              </div>
              <div v-else-if="User.CurrentUser.BMI < 25">
                <p>You are Normal Weight</p>
              </div>
              <div v-else-if="User.CurrentUser.BMI < 30">
                <p>You are Overweight - A Normal BMI is between 18.5-24.9</p>
              </div>
              <div v-else-if="User.CurrentUser.BMI > 30">
                <p>You are Obese - A Normal BMI is between 18.5-24.9</p>
              </div>
            </div>
              <div id="note">*For how much of your goals you have remaining and completed, go to the Food and Exercise Tabs.</div>
          </div>
    </div> 
    <div id="space"></div>          
  </div>
</div>
</template>

<script>
import User from "../models/Users";
export default {
    name: 'Profile',
    data:()=>({
        User
    })
} 
</script>