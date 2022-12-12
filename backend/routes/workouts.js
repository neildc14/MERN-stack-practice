const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const {
  getAllWorkOuts,
  getSpecificWorkOut,
  createWorKout,
  deleteWorkOut,
  updateWorkOut,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getAllWorkOuts);

router.get("/:id", getSpecificWorkOut);

router.post("/", createWorKout);

router.delete("/:id", deleteWorkOut);

router.patch("/:id", updateWorkOut);

module.exports = router;
