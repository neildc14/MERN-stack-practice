import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Form from "../layouts/Form";
import useChangeInput from "../hooks/useChangeInput";
import {
  useGetAllWorkoutsQuery,
  useGetWorkoutQuery,
  useUpdateWorkoutMutation,
} from "../services/api/workouts";

const WorkoutUpdate = ({ isOpen, resetId, id }) => {
  const results = useGetAllWorkoutsQuery();
  const { data: workout, isFetching, isSuccess } = useGetWorkoutQuery(id);
  const [updateWorkout] = useUpdateWorkoutMutation();

  const [updateTitle, bindTitle] = useChangeInput(workout?.title);
  const [updateLoad, bindLoad] = useChangeInput(workout?.load);
  const [updateReps, bindReps] = useChangeInput(workout?.reps);

  const updateWorkoutFunction = () => {
    updateWorkout({ id, updateTitle, updateLoad, updateReps }).then(() => {
      results.refetch();
    });
  };
  console.log(workout);
  return (
    <>
      {isSuccess && (
        <Modal
          isOpen={isOpen}
          onClose={resetId}
          mt={10}
          py={10}
          id={id}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Workout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Form
                id={id}
                bindTitle={bindTitle}
                bindLoad={bindLoad}
                bindReps={bindReps}
                submitFunction={updateWorkoutFunction}
                buttonName="Update Workout"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default React.memo(WorkoutUpdate);
