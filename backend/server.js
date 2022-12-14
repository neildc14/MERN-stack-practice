const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
require("dotenv").config();

const app = express();
const workoutsRoutes = require("./routes/workouts");
const userRoutes = require("./routes/users");

//middleware
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutsRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to mongodb,listening on port ", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
