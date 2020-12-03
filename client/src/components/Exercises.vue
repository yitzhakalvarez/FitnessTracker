/* eslint-disable */
<template>
  <section>
    <div class="card">
      <b-collapse
        class="card"
        animation="slide"
        :open="false"
        v-for="(exercise, index) in exercises"
        v-bind:key="exercise"
      >
        <div
          slot="trigger"
          class="card-header"
          role="button"
          @click="isOpen = !isOpen"
        >
          <p class="card-header-title">
            {{ exercise.name }}
          </p>
          <a class="card-header-icon" aria-label="more options">
            <i :class="arrow" aria-hidden="true"></i>
          </a>
        </div>
        <div
          class="card-content"
          v-for="(activity, activityIndex) in exercise.activities"
          v-bind:key="activity"
        >
          {{ activity.type }}

          <a class="card-item">
            <i
              class="fas fa-minus-square"
              aria-hidden="true"
              @click="removeGroupActivity(index, activityIndex)"
            ></i>
          </a>
        </div>
        <footer class="card-footer">
          <a
            class="card-footer-item"
            @click="promptExerciseGroupActivity(index)"
          >
            <i class="fas fa-plus" aria-hidden="true"></i>
          </a>
          <a class="card-footer-item" @click="removeExerciseGroup(index)">
            <i class="fas fa-trash-alt" aria-hidden="true"></i>
          </a>
        </footer>
      </b-collapse>
    </div>
  </section>
</template>

<script>
import { context } from "../models/context";
export default {
  props: ["exercises", "dayId"],
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    arrow() {
      return this.isOpen ? "fas fa-angle-up" : "fas fa-angle-down";
    }
  },
  methods: {
    removeGroupActivity(exerciseId, activityId) {
      context.removeActivityFromExerciseGroup(
        this.$props.dayId,
        exerciseId,
        activityId
      );
    },
    removeExerciseGroup(exerciseId) {
      context.removeExerciseGroupFromDay(this.$props.dayId, exerciseId);
    },
    promptExerciseGroupActivity(groupIndex) {
      this.$buefy.dialog.prompt({
        message: "Enter an activity",
        inputAttrs: {
          placeholder: "e.g. Pullups",
          maxlength: 25
        },
        trapFocus: true,
        onConfirm: value => {
          context.addActivityToGroup(this.$props.dayId, groupIndex, value);
          this.$buefy.toast.open({
            message:
              value +
              " added to " +
              context.state.user.routine[this.$props.dayId - 1].name,
            type: "is-success"
          });
        }
      });
    }
  }
};
</script>

<style>
div .card-header-title {
  color: rgb(121, 87, 213);
  width: auto;
}
div .content {
  font-weight: 500;
  min-width: 200px;
}
div .card-item {
  align-content: right;
  color: black;
}
.card-item .fa-minus-square {
  color: black;
  float: right;
}
.card-header {
  text-align: center;
  height: 50px;
}
</style>
