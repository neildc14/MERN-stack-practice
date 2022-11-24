import React from "react";
import { Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import DataLoading from "../components/DataLoading";
import { useGetAllWorkoutsQuery } from "../services/api/workouts";

function Home() {
  const { data, isFetching, isSuccess } = useGetAllWorkoutsQuery();

  return (
    <Container maxW="container.xl" mt={10}>
      <Grid templateColumns="60% 1fr" gap={20}>
        <GridItem>
          <Flex flexDirection="column" gap={4}>
            {isFetching && <DataLoading />}
            {isSuccess &&
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
