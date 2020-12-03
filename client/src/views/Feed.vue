<template>
  <div class="page">
      <strong>Feed</strong>
        <div class="columns">
            <div class="column is-one-half">
                <Posts v-for=" (x, i) in posts" 
                      :key="i"
                      :i="i"
                      :post="x" /> 
            </div>
        </div>
  </div>
</template>

<script>
import Posts from "@/components/Posts";
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
        console.log('Getting feed info');
        console.log(user_id);
        this.posts = await getPosts(user_id);
    },
    components: {
       Posts
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
        margin-bottom: 20px ;
    }
</style>