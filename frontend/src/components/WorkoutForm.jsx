import React from "react";
import useChangeInput from "../hooks/useChangeInput";
import Form from "../layouts/Form";
import {
  useCreateWorkoutMutation,
  useGetAllWorkoutsQuery,
} from "../services/api/workouts";

function WorkoutForm() {
  const [title, bindTitle, resetTitle] = useChangeInput("");
  const [load, bindLoad, resetLoad] = useChangeInput("");
  const [reps, bindReps, resetReps] = useChangeInput("");

  const data = useGetAllWorkoutsQuery();
  const [createWorkout] = useCreateWorkoutMutation();

  const createNewWorkout = (e) => {
    e.preventDefault();
    createWorkout({ title, load, reps }).then(() => {
      resetTitle();
      resetLoad();
      resetReps();
      data.refetch();
    });
  };

  return (
    <Form
      bindTitle={bindTitle}
      bindLoad={bindLoad}
      bindReps={bindReps}
      submitFunction={createNewWorkout}
      formHeading="Add a New Workout"
      buttonName="Create Workout"
    />
  );
}

export default WorkoutForm;
