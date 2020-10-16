<template>
  <div class="events container">
    <h2 class="subtitle is-3">Check out our upcoming events</h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter">
        <router-link :to="`/event/${event.id}`">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import card from "@/components/card";
export default {
  name: "card",
  components: {
    EventCard
  },
  data() {
    return {
      event: {},
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
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
}
</style>