<template>
  <div class="page">
      <strong>Dashboard</strong>
        <div class = "card">
        <div class = columns>
           <div class = "column is-two-thirds">
                      <div class="control">
                        <a class="button is-rounded is-warning" @click.prevent="releasedeleteforms">
                             Want to delete a user?
                        </a>
                      </div>
                      <div class = "field" v-if="deleteid == 1">
                        <label class="label"> <strong>Enter User's ID:</strong></label>
                        <div class="control">
                          <input class="input" type="Number" placeholder="User ID" v-model="userid">
                        </div>
                        <div class="control" v-if="deleteid == 1">
                          <a class="button is-rounded is-danger" @click.prevent="deleteuser">
                               Delete User
                          </a>
                        </div>
                      </div>
              </div>
        </div>
    </div>
    <div class = "card">
        <table class="table is-narrow is-hoverable is-fullwidth">
            <thead><tr>
                <th>I.D.</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                 <th>D.O.B</th>
                <th>Password</th>
                <th>User Type</th>
            </tr></thead>
            <tbody>
                <tr v-for=" (x, i) in list " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                     <td>{{x.Username}}</td>
                    <td>{{x.Firstname}}</td>
                    <td>{{x.Lastname}}</td>
                    <td> {{x.DOB}}</td>
                    <td>{{x.Password}}</td>
                    <td>{{x.User_Type}}</td>
                </tr>
            </tbody>
        </table>
  </div>
  </div>
</template>

<script>

import { getListAdmin, deleteuserfromlist } from "@/models/users";
import session from "@/models/session";

export default {
    data(){
        return {
            list: [],
            deleteid: 0,
            userid: null,
        }
    },
    async created(){
        this.list = await getListAdmin(); 
    },
    components: {
        
    },
    methods: {
        releasedeleteforms()
        {
            this.deleteid = 1;
        },
        async deleteuser()
        {
           const response = await deleteuserfromlist(this.userid);
           this.list = await getListAdmin(); 
        }
    }
}
</script>

<style>

</style>