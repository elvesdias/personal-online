import { API_URL } from "@env"

const { Exercise: ExerciseModel } = require("../models/Exercise");

const exerciseController = {
    create: async (req, res) => {
        try {
            const exercise = {
                name: req.body.name,
                series: req.body.series,
                repetitions: req.body.repetitions,
                demo: req.body.demo,
                thumb: req.body.thumb,
            };

            const newExercise = new ExerciseModel(exercise);
            await newExercise.save();

            res.status(201).json(newExercise);
        } catch (error) {
            res.status(500).json({ error: "Failed to create exercise" });
        }
    },
};

module.exports = exerciseController;

const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exerciseController");

router.route("/exercises").post(exerciseController.create);

module.exports = router;


module.exports = exerciseController;


router.route("/exercises")
    .post((req, res) => exerciseController.create(req, res));

export async function exerciseCreate(name, email, password, confirmPassword) {
    const response = await axios.post(`${API_URL}/users/edit`, {
        name: req.body.name,
        series: req.body.series,
        repetitions: req.body.repetitions,
        demo: req.body.demo,
        thumb: req.body.thumb,
    })
    return (response.status == 200)
}
