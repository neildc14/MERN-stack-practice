import React, { useCallback } from "react";
import {
  useDeleteWorkoutMutation,
  useGetAllWorkoutsQuery,
  useGetWorkoutQuery,
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
  updatedAt,
  isOpen,
  onOpen,
  onClose,
}) {
  const IDToUpdate = useSelector((state) => state.updateID.IDToUpdate);
  const dispatch = useDispatch();
  const results = useGetAllWorkoutsQuery();
  const [deleteWorkout] = useDeleteWorkoutMutation();
  const {
    data: workout,
    isSuccess,
    isFetching,
  } = useGetWorkoutQuery(IDToUpdate);

  const IDSetter = useCallback(
    (e) => {
      dispatch(setIDToUpdate(e.target.id));
      onOpen();
      return;
    },
    [IDToUpdate]
  );

  const resetID = useCallback(() => {
    dispatch(setIDToUpdate(undefined));
    onClose();
  }, [IDToUpdate]);

  const deleteWorkoutFunction = useCallback(() => {
    deleteWorkout(id).then(() => {
      results.refetch();
    });
  }, [id]);

  return (
    <>
      <WorkoutCard
        id={id}
        title={title}
        load={load}
        reps={reps}
        createdAt={createdAt}
        updatedAt={updatedAt}
        IDSetter={IDSetter}
        deleteWorkoutFunction={deleteWorkoutFunction}
      />
      {!isFetching && isSuccess && (
        <WorkoutUpdate
          id={IDToUpdate}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          workout={workout}
          resetId={resetID}
        />
      )}
    </>
  );
}

export default WorkoutDetails;
