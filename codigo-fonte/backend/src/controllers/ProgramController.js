const ProgramModel = require("../models/Program");

const programController = {
  create: async (req, res) => {
    try {
      const { adminId, userId, name, workouts } = req.body;

      const program = { adminId, userId, name, workouts };

      const response = await ProgramModel.create(program);

      res.status(201).json({ response, message: "Created" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to create program", error });
    }
  },

  getAll: async (req, res) => {
    try {
      const programs = await ProgramModel.find();
      res.json(programs);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve programs", error });
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const program = await ProgramModel.findById(id);

      if (!program) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.json(program);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve program", error });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const program = await ProgramModel.findById(id);

      if (!program) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      const deletedProgram = await ProgramModel.findByIdAndDelete(id);
      res.status(200).json({ deletedProgram, message: "Deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to delete program", error });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, series, repetitions, demo, thumb } = req.body;

      const updatedProgram = await ProgramModel.findByIdAndUpdate(
        id,
        { name, series, repetitions, demo, thumb },
        { new: true }
      );

      if (!updatedProgram) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.status(200).json({ updatedProgram, message: "Updated" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to update program", error });
    }
  },
};

module.exports = programController;
