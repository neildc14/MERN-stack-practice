import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import useChangeInput from "../hooks/useChangeInput";
import { useMutation } from "@tanstack/react-query";
import { createWorkout } from "../services/createWorkout";

function WorkoutForm() {
  const [title, bindTitle] = useChangeInput();
  const [load, bindLoad] = useChangeInput();
  const [reps, bindReps] = useChangeInput();

  const mutation = useMutation({
    mutationFn: createWorkout,
    onError: (error, variables, context) => {
      console.log(error);
    },
  });

  const createNewWorkout = (e) => {
    mutation.mutate({ title, load, reps });
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
      <Button
        type="submit"
        mt={6}
        bgColor="primary.100"
        color="white"
        _hover={{ bgColor: "green.500" }}
      >
        Add Workout
      </Button>
    </Box>
  );
}

export default WorkoutForm;
