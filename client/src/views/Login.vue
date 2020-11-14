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
                <input type="username" id="Username" placeholder="username" class="input" v-model="username" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" id="loginPassword" placeholder="*******" class="input" v-model="password" required>
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
  import * as api from '@/services/api_access';

  export default 
  {
    components: 
    {
    },
        methods: {
            //Login User
            login() {
                var Username = document.getElementById("Username").value;
                var password = document.getElementById("loginPassword").value;
                api.loginUser(Username, password).then(
                    user => {
                        if (user == "404")
                            alert("Username or password is incorrect");
                        else
                            this.$router.push('/profile');
                    }
                );
                //Prevent form submit refresh
                event.preventDefault();
            },

        mounted() {
            document.getElementById("loginForm").addEventListener('submit', this.login);
        }
    }
  }
</script>