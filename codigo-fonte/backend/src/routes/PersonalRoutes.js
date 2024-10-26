const router = require("express").Router();

const PersonalController = require("../controllers/PersonalController");

// Middlewares
const verifyToken = require("../helpers/verify-token")

router.post("/register", PersonalController.register);
router.post("/login", PersonalController.login);
router.get("/checkuser", PersonalController.checkUser);
router.get("/:id", PersonalController.getUserById);
router.patch("/edit/:id", verifyToken, PersonalController.editUser);

router.post("/historico", PersonalController.createHist);
router.get("/:id/historico", PersonalController.getAllHist);
router.delete("/:id/historico/:hist_id", PersonalController.deleteHist);

module.exports = router;
