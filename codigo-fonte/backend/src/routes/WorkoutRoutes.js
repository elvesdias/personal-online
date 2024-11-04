const router = require("express").Router();

const WorkoutController = require("../controllers/WorkoutController");

router
  .route("/workout/register")
  .post((req, res) => WorkoutController.create(req, res));

router
  .route("/workout")
  .delete((req, res) => WorkoutController.delete(req, res));

router
  .route("/workout")
  .put((req, res) => WorkoutController.update(req, res));

module.exports = router;
