<template>
<div class="card">
    <header class="card-header">
    <p class="card-header-title">
      
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>

  <div class="card-content">
    <h3 style="font-size:45px;"><strong>A New Exercise Has Been Posted</strong></h3>
    <div class="media">
      <div class="media-content">
        <p class="title is-4"><br>{{post.FirstName}} {{post.LastName}}</p>
        <p class="subtitle is-6"><br>({{post.PrimaryEmail}})</p>
      </div>
    </div>

    
    <div class="content">
       <br><strong>{{post.Reactions}} people reacted to this</strong>
    </div>

    <div class="content">
      <p><strong>Exercise Entered: {{post.Exercise_Type}}</strong></p>
      <p><strong><br>Bodyweight Entered: {{post.BodyWeight}} kg </strong></p>
      <p><strong><br>Amount of minutes spent exercising: {{post.Time_Spent}} Minutes</strong></p>
      <p><strong><br>Calories Burned while exercising: {{post.Calories_Burned}} Calories</strong></p>

      <time :datetime="post.created_at">{{post.created_at}}</time>
    </div>

    <div class="media" v-for="c in post.Comments" :key="c.id">
      <div class="media-content">
        <b >{{c.FirstName}} {{c.LastName}} </b>
        <span>{{c.Text}}</span>
      </div>
    </div>    
  </div>
    <footer class="card-footer">
      <div class="field has-addons" style="width: 100%">
      <div class="control  is-expanded">
        <input class="input" type="text" placeholder="Add a comment" v-model="commentText">
      </div>
      <div class="control">
        <a class="button" @click.prevent="comment">
          Post
        </a>
      </div>
    </div>
    </footer>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">
            <span class="icon">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
            Reply    
    </a>
    <a href="#" class="card-footer-item">
            <span class="icon">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
            Repost
    </a>
    <a href="#" class="card-footer-item" @click.prevent="react">
            <span class="icon">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
            React      
    </a>
  </footer>

</div>
</template>

<script>
import { react, comment} from "../models/exercise";
import session from "@/models/session";

export default {
    data: ()=>({
      commentText: ''
    }),
    props: {
        post: Object,
        i: Number
    },
    methods: {
      react(){
      const userid = session.user_id
      const that = this;
        react(this.post.id, userid)
        .then(x=> that.post.Reactions += 1)
        .catch(err=> console.error(err))
      },
      async comment(){
        const userid = session.user_id
        const response = await comment(this.post.id, userid, this.commentText);
        this.post.Comments.push(response);
        
      }
    }
}

</script>

<style>
    time {
      font-size: smaller;
      font-style: italic;
      float: right;
    }
    .card .card-content .media {
      margin: 0;
    }
</style>