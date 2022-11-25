import React from "react";
import {
  Box,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";

function Form({
  id,
  formHeading,
  submitFunction,
  bindTitle,
  bindLoad,
  bindReps,
  buttonName,
  children,
}) {
  return (
    <Box as="form" mx="auto" onSubmit={submitFunction} id={id}>
      <Heading as="h2" mb={4} fontSize={{ base: "lg" }} textAlign="center">
        {formHeading}
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
      <FormControl>{children}</FormControl>
      <Button type="submit" mt={6} colorScheme="messenger" color="white">
        {buttonName}
      </Button>
    </Box>
  );
}

export default Form;
