import { users } from "./Users.js";

export const context = {
  state: {
    user: null,
    users: users
  },

  removeActivityFromExerciseGroup(dayId, exerciseIndex, activityIndex) {
    this.state.user.routine[dayId - 1].exercises[
      exerciseIndex
    ].activities.splice(activityIndex, 1);
  },

  removeExerciseGroupFromDay(dayId, exerciseIndex) {
    this.state.user.routine[dayId - 1].exercises.splice(exerciseIndex, 1);
  },

  addExerciseGroupToDay(dayId, group) {
    this.state.user.routine[dayId - 1].exercises.push({
      name: group,
      finished: false,
      activities: []
    });
  },

  addActivityToGroup(dayId, exerciseIndex, type) {
    this.state.user.routine[dayId - 1].exercises[
      exerciseIndex
    ].activities.push({ type: type, completed: false });
  },

  login(handle, password) {
    const index = users.findIndex(
      user => user.handle === handle && user.password === password
    );
    if (index !== -1) {
      this.state.user = users[index];
      this.state.user.loggedIn = true;
      return true;
    }
    this.state.user = null;
    return false;
  },

  logout() {
    this.state.user.loggedIn = false;
    this.state.user = null;
  }
};
