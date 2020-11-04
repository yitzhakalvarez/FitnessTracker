<template>
  <div class="container">
    <div v-if="User">
      <p>Hi {{ User }}</p>
    </div>
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="title">Title:</label>
          <input type="text" name="title" v-model="form.title" />
        </div>
        <div>
          <textarea
            name="write_up"
            v-model="form.write_up"
            placeholder="Write up..."
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="posts" v-if="Posts">
      <ul>
        <li v-for="post in Posts" :key="post.id">
          <div id="post-div">
            <p>{{ post.title }}</p>
            <p>{{ post.write_up }}</p>
            <p>Written By: {{ post.author.username }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>Oh no!!! We have no posts</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Posts",
  components: {},
  data() {
    return {
      form: {
        title: "",
        write_up: "",
      },
    };
  },
  created: function() {
    // a function to call getposts action
    this.GetPosts()
  },
  computed: {
    ...mapGetters({ Posts: "StatePosts", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["CreatePost", "GetPosts"]),
    async submit() {
      try {
        await this.CreatePost(this.form);
      } catch (error) {
        throw "Sorry you can't make a post now!"
      }
    },
  },
};
</script>