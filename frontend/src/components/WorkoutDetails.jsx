import React, { useCallback } from "react";
import {
  useDeleteWorkoutMutation,
  useGetAllWorkoutsQuery,
} from "../services/api/workouts";
import WorkoutUpdate from "../components/WorkoutUpdate";
import { useSelector, useDispatch } from "react-redux";
import { setIDToUpdate } from "../services/features/idSlice";
import WorkoutCard from "./WorkoutCard";

function WorkoutDetails({
  id,
  title,
  load,
  reps,
  createdAt,
  isOpen,
  onOpen,
  onClose,
}) {
  const data = useGetAllWorkoutsQuery();
  const [deleteWorkout] = useDeleteWorkoutMutation();

  const IDToUpdate = useSelector((state) => state.updateID.IDToUpdate);
  const dispatch = useDispatch();

  const deleteWorkoutFunction = () => {
    deleteWorkout(id).then(() => {
      data.refetch();
    });
  };

  const IDSetter = useCallback(
    (e) => {
      dispatch(setIDToUpdate(e.target.id));
      onOpen();
    },
    [IDToUpdate]
  );

  const resetID = useCallback(() => {
    dispatch(setIDToUpdate(""));
    onClose();
  }, [IDToUpdate]);

  console.log(id);

  return (
    <>
      <WorkoutCard
        title={title}
        load={load}
        reps={reps}
        createdAt={createdAt}
        IDSetter={IDSetter}
        deleteWorkoutFunction={deleteWorkoutFunction}
      />
      <WorkoutUpdate
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        id={IDToUpdate}
        title={title}
        load={load}
        reps={reps}
        resetId={resetID}
      />
    </>
  );
}

export default WorkoutDetails;
