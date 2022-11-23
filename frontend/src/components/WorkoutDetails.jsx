import React from "react";
import { Card, CardHeader, CardBody, Text, HStack } from "@chakra-ui/react";

function WorkoutDetails({ title, load, reps, createdAt }) {
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
        <Text fontSize={{ base: "md", lg: "sm" }}>{createdAt}</Text>
      </CardBody>
    </Card>
  );
}

export default WorkoutDetails;
