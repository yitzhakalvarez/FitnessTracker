<template>
  <div class="page">
      <h2 class="title is-2"><br>Feed Page(Ran out of time to make comments and reactions dynamically change with the page. It works but you'll have to refresh the page to see the changes.)</h2>

        <div class="columns">
            <div class="column is-one-half">
                <FitnessPosts v-for=" (x, i) in posts " 
                      :key="i"
                      :i="i"
                      :post="x" /> 
            </div>
        </div>
  </div>
</template>

<script>
import FitnessPosts from "@/components/FitnessPosts";
import { getFitnessPosts } from "@/models/exercise";
import session from "@/models/session";

export default {
    data(){
        return {
            posts: [],
        }
    },
    async created(){
        const user_id = session.user_id;
        console.log('Attempting to get feed info');
        console.log(user_id);
        this.posts = await getFitnessPosts(user_id);
    },
    components: {
       FitnessPosts
    },
    methods: {
        error(){
            //session.addNotification('Something went wrong.', 'danger')
        },
        add(p){
            this.posts.push({
                URL: p.images[0].source
            })
        }
    }
}
</script>

<style>
    .card {
        margin-bottom: 30px ;
    }
</style>