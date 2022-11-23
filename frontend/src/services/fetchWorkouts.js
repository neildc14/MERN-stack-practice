import axios from "axios";

export async function fetchWorkouts() {
  try {
    const response = await axios.get("http://localhost:4000/api/workouts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
