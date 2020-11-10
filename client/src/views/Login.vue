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
                <input type="username" placeholder="username" class="input" v-model="username" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" v-model="password" required>
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
import User from "../models/Users";
import { getFood } from "../models/Food";
import { getExercise } from "../models/Exercise";

export default {
  data(){
    return {
      email: '',
      password: '',
      error: '',
      User
    }
  },
   methods: {
    async login() {
      try {
        await User.Login(this.email, this.password);
        await getFood();
        await getExercise();//await getExercise(this.email);
        await getFriends();
        await getSentRequests();
        await getPendingRequests();
        await getPosts();
        await getFoodPosts();
        
        if(User.CurrentUser.IsAdmin == true) {
          this.$router.push('/admin');
         } 
         else { 
          this.$router.push('/profile');
         }
      } catch(error) {
        this.error = error;
      }
    }
  }
}
</script>