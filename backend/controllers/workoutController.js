const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

const getAllWorkOuts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: 1 });
  res.status(200).json(workouts);
};

const getSpecificWorkOut = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist" });
  }

  const specificWorkOut = await Workout.findById(id);

  if (!specificWorkOut) {
    return res.status(404).json({ message: "Workout does not exist" });
  }
  res.status(200).json(specificWorkOut);
};

const createWorKout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkOut = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "Workout does not exist" });
  }
  res.status(200).json(workout);
};

const updateWorkOut = async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Workout does not exist" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "Workout does not exist" });
  }
  // console.log(workout);
  res.status(200).json(workout);
};

module.exports = {
  getAllWorkOuts,
  getSpecificWorkOut,
  createWorKout,
  deleteWorkOut,
  updateWorkOut,
};
