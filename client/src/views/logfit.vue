<template>
    <form @submit.prevent="addExercise">  
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
          <a class="button is-primary" v-bind="attrs" v-on="on">
            <strong>Add to Log</strong>
          </a>
      </template>

      
      <v-card style="background-color: #76F3A2">
        <v-card-title style="text-align: center;">
          <span class="headline">Add Exercise!</span>
        </v-card-title>
              <v-col>
                
              <v-text-field style="color: white;"
                  label="Exercise Type"
                  hint="What type of exercise is it?"
                  required
                  v-model="user_log.exercise_name"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Reps"
                  hint="How many of this exercise do you want to do?"
                  v-model="user_log.reps"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-autocomplete
                  :items="['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']"
                  label="Frequency"
                  multiple
                  v-model="user_log.days"
                ></v-autocomplete>
              </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dialog = this.dialog
            text
            @click="addExercise"
          >
            Add to Log
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </form>
</template>


<script>
import jwt_decode from "jwt-decode";
export default {
    name: 'addLog',
    data: () => ({
      dialog: false,
      user_log: {
              email: "",
              exercise_name: "",
              reps: 0,
              days: []
      }
    }),
    methods: {
      async addExercise() {
        this.dialog = false;
        console.log("Executed successfully");
        try{
          let token = localStorage.getItem("jwt");
          console.log("token : " + token);
          let decoded = jwt_decode(token);
          this.user_log.email = decoded.email
          console.log(this.user_log);
          this.$swal.fire('Added to Log!');
          let res = await this.$http.post("/updateLog", this.user_log);
          console.log("Add log response: " + res);
        }
        catch(err){
          console.log("This is the addlog error: " + err);
        }
    },
    }
}
</script>