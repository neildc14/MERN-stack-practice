import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import useChangeInput from "../hooks/useChangeInput";
import {
  useCreateWorkoutMutation,
  useGetAllWorkoutsQuery,
} from "../services/api/workouts";

function WorkoutForm() {
  const [title, bindTitle] = useChangeInput();
  const [load, bindLoad] = useChangeInput();
  const [reps, bindReps] = useChangeInput();

  const data = useGetAllWorkoutsQuery();
  const [createWorkout, workoutResult] = useCreateWorkoutMutation();

  const createNewWorkout = (e) => {
    e.preventDefault();
    createWorkout({ title, load, reps }).then(() => data.refetch());
  };

  return (
    <Box as="form" mx="auto" onSubmit={createNewWorkout}>
      <Heading as="h2" mb={4} fontSize={{ base: "lg" }} textAlign="center">
        Add a New Workout
      </Heading>
      <FormControl mb={2}>
        <FormLabel>Exercise Title:</FormLabel>
        <Input type="text" bgColor="white" required {...bindTitle} />
      </FormControl>
      <FormControl mb={2}>
        <FormLabel>Load(in kg.):</FormLabel>
        <Input type="number" bgColor="white" required {...bindLoad} />
      </FormControl>
      <FormControl mb={2}>
        <FormLabel>Repetitions:</FormLabel>
        <Input type="number" bgColor="white" required {...bindReps} />
      </FormControl>
      <Button type="submit" mt={6} colorScheme="messenger" color="white">
        Add Workout
      </Button>
    </Box>
  );
}

export default WorkoutForm;
