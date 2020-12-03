<template>
  <div class="page">
      <h2 class="title is-2">Users Page</h2>
        <div class = "card">
        <div class = columns>
           <div class = "column is-two-thirds">
                      <div class="control">
                        <a class="button" @click.prevent="releasefriendforms">
                             See someone you want to add to your friends list?
                        </a>
                      </div>
                      <div class = "field" v-if="addfriendid == 1">
                        <h2><strong>Add a friend with the following inputs!</strong></h2>
                        <label class="label"> <strong>Enter the id of the user you want to add:</strong></label>
                        <div class="control">
                          <input class="input" type="Number" placeholder="User ID" v-model="friendid">
                        </div>
                        <div class="control" v-if="addfriendid == 1">
                         <label class="label"> <strong>After you hit the add friend button hit the view friends button to look at your list of friends:</strong></label>
                          <a class="button" @click.prevent="addnewfriend">
                               Add a friend!
                          </a>
                        </div>
                      </div>
              </div>
              <div class = "column is-one-third">
                  <div class="control">
                      <router-link to="/friendlist"  class="button is-link is-danger"><strong>Look at friendslist</strong></router-link>
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
                    <td>{{x.User_Type}}</td>
                </tr>
            </tbody>
        </table>
  </div>
  </div>
</template>

<script>

import { getList, addfriend } from "@/models/users";
import session from "@/models/session";

export default {
    data(){
        return {
            list: [],
            addfriendid: 0,
            friendid: null,
        }
    },
    async created(){
        this.list = await getList(); 
    },
    components: {
        
    },
    methods: {
        releasefriendforms()
        {
            this.addfriendid = 1;
        },
        async addnewfriend()
        {
           const user_id = session.user_id;
           console.log(this.friendid);
           console.log(user_id);
           const response = await addfriend(this.friendid, user_id);
        }
    }
}
</script>

<style>

</style>