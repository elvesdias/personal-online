const router = require("express").Router();

const ProgramController = require("../controllers/ProgramController");

router
  .route("/programs/register")
  .post((req, res) => ProgramController.create(req, res));

// router
//   .route("/programs")
//   .get((req, res) => ProgramController.getAll(req, res));

// router
//   .route("/programs/:id")
//   .get((req, res) => ProgramController.get(req, res));

router
  .route("/programs")
  .delete((req, res) => ProgramController.delete(req, res));

router
  .route("/programs")
  .put((req, res) => ProgramController.update(req, res));

module.exports = router;
