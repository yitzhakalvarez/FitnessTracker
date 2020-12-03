<template>
  <div class="page">
      <!-- Hi professor if you want to test this page login in with the email turok4589@aol.com !-->
      <h2 class="title is-2">Dashboard</h2>
        <div class = "card">
        <div class = columns>
           <div class = "column is-two-thirds">
                      <div class="control">
                        <a class="button" @click.prevent="releasedeleteforms">
                             Want to delete a user?
                        </a>
                      </div>
                      <div class = "field" v-if="deleteid == 1">
                        <h2><strong>Add a friend with the following inputs!</strong></h2>
                        <label class="label"> <strong>Enter the id of the user you want to add:</strong></label>
                        <div class="control">
                          <input class="input" type="Number" placeholder="User ID" v-model="userid">
                        </div>
                        <div class="control" v-if="deleteid == 1">
                         <label class="label"> <strong>After you hit the add friend button hit the view friends button to look at your list of friends:</strong></label>
                          <a class="button" @click.prevent="deleteuser">
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
                <th>id</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                 <th>DOB</th>
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