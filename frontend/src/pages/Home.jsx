import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWorkouts } from "../services/fetchWorkouts";
import { Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

function Home() {
  const { isLoading, isFetching, data } = useQuery({
    queryKey: ["workouts"],
    queryFn: fetchWorkouts,
  });

  return (
    <Container maxW="container.xl" mt={10}>
      <Grid templateColumns="60% 1fr" gap={20}>
        <GridItem>
          <Flex flexDirection="column" gap={4}>
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
        </GridItem>
        <GridItem>
          <WorkoutForm />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Home;
