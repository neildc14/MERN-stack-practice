import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWorkouts } from "../services/fetchWorkouts";
import { Container, Flex } from "@chakra-ui/react";
import WorkoutDetails from "../components/WorkoutDetails";

function Home() {
  const { isLoading, isFetching, data } = useQuery({
    queryKey: ["workouts"],
    queryFn: fetchWorkouts,
  });

  return (
    <Container maxW="container.xl" mt={10}>
      <Flex flexDirection="column" gap={4} maxW={{ lg: "50%" }}>
        {!isLoading &&
          data.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              title={workout.title}
              load={workout.load}
              reps={workout.reps}
              createdAt={workout.createdAt}
            />
          ))}
      </Flex>
    </Container>
  );
}

export default Home;
