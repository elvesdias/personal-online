const WorkoutModel = require("../models/Workout");

const workoutController = {
  create: async (req, res) => {
    try {
      const { programId, name, day, exercises } = req.body;

      const workout = { programId, name, day, exercises };

      const response = await WorkoutModel.create(workout);

      res.status(201).json({ response, message: "Created" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to create workout", error });
    }
  },

  getAll: async (req, res) => {
    try {
      const Workouts = await WorkoutModel.find();
      res.json(Workouts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve Workouts", error });
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const Workout = await WorkoutModel.findById(id);

      if (!Workout) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.json(Workout);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve Workout", error });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const Workout = await WorkoutModel.findById(id);

      if (!Workout) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      const deletedWorkout = await WorkoutModel.findByIdAndDelete(id);
      res.status(200).json({ deletedWorkout, message: "Deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to delete Workout", error });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, series, repetitions, demo, thumb } = req.body;

      const updatedWorkout = await WorkoutModel.findByIdAndUpdate(
        id,
        { name, series, repetitions, demo, thumb },
        { new: true }
      );

      if (!updatedWorkout) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.status(200).json({ updatedWorkout, message: "Updated" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to update Workout", error });
    }
  },
};

module.exports = workoutController;
