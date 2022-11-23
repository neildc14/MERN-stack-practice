import axios from "axios";

export function createWorkout(newWorkout) {
  return axios.post("http://localhost:4000/api/workouts", newWorkout);
}
