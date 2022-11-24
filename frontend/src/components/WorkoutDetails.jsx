import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import {
  useDeleteWorkoutMutation,
  useGetAllWorkoutsQuery,
} from "../services/api/workouts";

function WorkoutDetails({ id, title, load, reps, createdAt }) {
  const data = useGetAllWorkoutsQuery();
  const [deleteWorkout] = useDeleteWorkoutMutation();

  const deleteWorkoutFunction = () => {
    deleteWorkout(id).then(() => {
      data.refetch();
    });
  };

  return (
    <Card bgColor="white">
      <CardHeader>
        <Text
          color="primary.100"
          fontSize={{ base: "lg", lg: "md" }}
          fontWeight="bold"
        >
          {title}
        </Text>
      </CardHeader>
      <CardBody pt={{ base: 4, lg: 2 }}>
        <HStack>
          <Text as="b" fontSize={{ base: "md", lg: "sm" }}>
            Load(kg):
          </Text>
          <Text>{load}</Text>
        </HStack>
        <HStack>
          <Text as="b" fontSize={{ base: "md", lg: "sm" }}>
            Repititions:
          </Text>
          <Text>{reps}</Text>
        </HStack>
        <Text fontSize={{ base: "md", lg: "sm" }}>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
          })}
        </Text>
        <HStack mt={4}>
          <Button rightIcon={<EditIcon />} size="xs" colorScheme="whatsapp">
            Update Workout
          </Button>
          <Button
            rightIcon={<DeleteIcon />}
            size="xs"
            onClick={deleteWorkoutFunction}
          >
            Delete Workout
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default WorkoutDetails;
