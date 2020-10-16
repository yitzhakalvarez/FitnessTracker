<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ event.name }}</h1>
          <h2 class="subtitle">
            <strong>Date:</strong>
            {{ event.date }}
            <br />
            <strong>Time:</strong>
            {{ event.time }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.description }}</p>
        <p class="is-size-5">
          <strong>Location:</strong>
          {{ event.location }}
        </p>
        <p class="is-size-5">
          <strong>Category:</strong>
          {{ event.category }}
        </p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in event.images" :key="image.id" class="column is-one-third">
            <img :src="`${image}`" :alt="`${event.name}`" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ExerciseList",
  data() {
    return {
      events: [
        {
          id: 1,
          name: "John Smith",
          category: "Gym",
          description:
            "Some big ol' dude.",
          featuredImage: "https://clipartstation.com/wp-content/uploads/2018/10/man-exercising-clipart.jpg",
          images: [
            "https://clipartstation.com/wp-content/uploads/2018/10/man-exercising-clipart.jpg",
            "https://clipartstation.com/wp-content/uploads/2018/10/man-exercising-clipart.jpg",
            "https://clipartstation.com/wp-content/uploads/2018/10/man-exercising-clipart.jpg"
          ],
          location: "1234 Big Ave",
          date: "12-25-1998",
          time: "11:30"
        },
        {
          id: 2,
          name: "Jane Smith",
          category: "Gym",
          description:
            "Some ol' lady",
          featuredImage: "https://i.pinimg.com/originals/2c/dd/7a/2cdd7a89ecad9bfb21be3df00a8da4c6.jpg",
          images: ["https://i.pinimg.com/originals/2c/dd/7a/2cdd7a89ecad9bfb21be3df00a8da4c6.jpg"],
          location: "1234 Dawg Ave",
          date: "11-21-1997",
          time: "12:00"
        }
      ],
      event: {}
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
};
</script>