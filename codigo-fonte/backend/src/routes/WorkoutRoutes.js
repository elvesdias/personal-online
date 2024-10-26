const router = require("express").Router();

const WorkoutController = require("../controllers/WorkoutController");

router
  .route("/workout/register")
  .post((req, res) => WorkoutController.create(req, res));

router
  .route("/workout")
  .get((req, res) => WorkoutController.getAll(req, res));

router
  .route("/workout/:id")
  .get((req, res) => WorkoutController.get(req, res));

router
  .route("/workout/:id")
  .delete((req, res) => WorkoutController.delete(req, res));

router
  .route("/workout/:id")
  .put((req, res) => WorkoutController.update(req, res));

module.exports = router;
