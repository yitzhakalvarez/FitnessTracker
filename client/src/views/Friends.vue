<template>
  <div class="page">
        <div class = "card">
        <div class = "columns">
            <div class = "column is-one-third">
                  <p><strong>User: {{session.user.name}}<br></strong></p>
                  <p><strong>User ID: {{session.user_id}}<br></strong></p>
                <div class="control">
                      <router-link to="/users"  class="button is-rounded is-link is-danger"><strong>Want to add a friend? click the button to view a list of users?</strong></router-link>
                  </div>
            </div>
            <div class = "column is-one-third is-offset-one-quarter">
                 <div class="control">
                          <a class="button is-rounded" @click.prevent="created">
                              Update FriendsList(Only meant for testing)
                          </a>
                </div>
                <div class="control">
                        <a class="button is-rounded" @click.prevent="releasedeleteforms">
                             Want to delete someone from your FriendsList?
                        </a>
                      </div>
                      <div class = "field" v-if="deletefriend == 1">
                        <h2><strong>Add a friend with the following inputs!</strong></h2>
                        <label class="label"> <strong>Enter the id of the user you want to delete:</strong></label>
                        <div class="control">
                          <input class="input" type="Number" placeholder="User ID" v-model="friendid">
                        </div>
                        <div class="control" v-if="deletefriend == 1">
                         <label class="label"> <strong>After you hit the add friend button hit the view friends button to look at your list of friends:</strong></label>
                          <a class="button is-rounded" @click.prevent="deletefriendfromtable">
                               Delete a friend!
                          </a>
                        </div>
                      </div>
            </div>
        </div>
        <table class="table is-narrow is-hoverable is-fullwidth">
            <thead><tr>
                <th>id</th>
                <th>Friends Firstname</th>
                <th>Friends Last Name</th>
                <th>DOB</th>
                <th>Type</th>
            </tr></thead>
            <tbody>
                <tr v-for=" (x, i) in list " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                    <td>{{x.Firstname}}</td>
                    <td>{{x.Lastname}}</td>
                    <td>{{x.DOB}}</td>
                    <td>{{x.User_Type}}</td>
                </tr>
            </tbody>
        </table>
  </div>
  </div>
</template>

<script>

import { getUserFriendslist, deletefriend } from "@/models/users";
import session from "@/models/session";

export default {
    data(){
        return {
            list: [],
            session,
            deleteuserfriend: 0,
            friendid: null,
            deletefriend: 0,
        }
    },
    async created(){
        const user_id = session.user_id;
        this.list = await getUserFriendslist(user_id); 
    },
    components: {
        
    },
    methods: {
        async created(){
            const user_id = session.user_id;
            this.list = await getUserFriendslist(user_id); 
       },
       async deletefriendfromtable(){
           const user_id = session.user_id;
           const response = await deletefriend(this.friendid, user_id);
           this.list = await getUserFriendslist(user_id);
       },
       releasedeleteforms()
        {
          this.deletefriend = 1;
        }
    }
}
</script>

<style>

</style>