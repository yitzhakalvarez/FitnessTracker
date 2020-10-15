import axios from "axios"

export default {
  async getExercises() {
    let res = await axios.get("http://localhost:8000/exercises");
    return res.data;
  },
  async getExerciseList(eventId, accessToken) {
    let res = await axios.get("http://localhost:8000/exercises/" + eventId, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return res.data;
  }
}