<template>
  <div class="page">
      <strong>Users Page</strong>
        <div class = "card">
        <div class = columns>
           <div class = "column is-one-thirds">
                      <div class="control">
                        <a class="button is-rounded is-info" @click.prevent="releasefriendforms">
                             Add friend to list
                        </a>
                      </div>
                      <div class = "field" v-if="addfriendid == 1">
                        <label class="label"><strong>Enter User's ID:</strong></label>
                        <div class="control">
                          <input class="input" type="Number" placeholder="User ID" v-model="friendid">
                        </div>
                        <div class="control" v-if="addfriendid == 1">
                          <a class="button is-rounded is-success" @click.prevent="addnewfriend">
                               Click add friend!
                          </a>
                        </div>
                      </div>
                     <div class="control">
                      <router-link to="/friends"  class="button is-rounded is-black">Find Friends</router-link>
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