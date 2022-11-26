import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
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
  const [updateTitle, bindUpdateTitle, resetTitle] = useChangeInput(title);
  const [updateLoad, bindUpdateLoad, resetLoad] = useChangeInput(load);
  const [updateReps, bindUpdateReps, resetReps] = useChangeInput(reps);
  const [id] = useChangeInput(_id);

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
      .catch((err) => console.log(err));
  };
  console.log("UPDATE", workout, id);
  console.log("VALUES", id, updateTitle, updateLoad, updateReps);
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={resetId} mt={10} py={10} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Workout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Form
                bindTitle={bindUpdateTitle}
                bindLoad={bindUpdateLoad}
                bindReps={bindUpdateReps}
                submitFunction={updateWorkoutFunction}
                buttonName="Update"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default React.memo(WorkoutUpdate);
