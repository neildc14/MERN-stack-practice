import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Form from "../layouts/Form";
import useChangeInput from "../hooks/useChangeInput";
import {
  useGetAllWorkoutsQuery,
  useUpdateWorkoutMutation,
} from "../services/api/workouts";

const WorkoutUpdate = ({ isOpen, onClose, resetId, workout }) => {
  const results = useGetAllWorkoutsQuery();
  const [updateWorkout] = useUpdateWorkoutMutation();
  const { _id, title, load, reps } = workout;
  const [updateTitle, bindUpdateTitle] = useChangeInput(title);
  const [updateLoad, bindUpdateLoad] = useChangeInput(load);
  const [updateReps, bindUpdateReps] = useChangeInput(reps);
  const [error, setError] = useState(null);

  const updateWorkoutFunction = (e) => {
    e.preventDefault();
    updateWorkout({
      id: _id,
      title: updateTitle,
      load: updateLoad,
      reps: updateReps,
    })
      .then((data) => {
        console.log(data);
        onClose();
        results.refetch();
      })
      .catch((err) => setError("Something went wrong.Try again"));
  };

  return (
    <>
      {isOpen && workout && (
        <Modal
          isOpen={isOpen}
          onClose={resetId}
          mt={10}
          py={10}
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay bg="blackAlpha.300" />
          <ModalContent>
            <ModalHeader>Update Workout</ModalHeader>
            <ModalCloseButton />
            <ModalBody mb={8}>
              <Form
                bindTitle={bindUpdateTitle}
                bindLoad={bindUpdateLoad}
                bindReps={bindUpdateReps}
                submitFunction={updateWorkoutFunction}
                buttonName="Update"
              />
              {error && (
                <Alert status="error" mt={4}>
                  <AlertIcon />
                  There was an error processing your request
                </Alert>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default React.memo(WorkoutUpdate);
