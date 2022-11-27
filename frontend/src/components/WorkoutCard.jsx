import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function WorkoutCard({
  id,
  title,
  load,
  reps,
  createdAt,
  updatedAt,
  IDSetter,
  deleteWorkoutFunction,
}) {
  return (
    <Card bgColor="white">
      <CardHeader>
        <Text
          color="primary.100"
          fontSize={{ base: "lg", lg: "md" }}
          fontWeight="bold"
        >
          {title.charAt(0).toUpperCase() + title.slice(1)}
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
          {formatDistanceToNow(new Date(updatedAt), {
            addSuffix: true,
          })}
        </Text>
        <HStack mt={4}>
          <Button
            rightIcon={<EditIcon />}
            size="xs"
            colorScheme="whatsapp"
            id={id}
            onClick={IDSetter}
          >
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
