const { Router } = require("express");
const PersonalController = require("../controllers/PersonalController");

const personalController = new PersonalController();

const router = Router();

router.get("/personais", (req, res) => personalController.getAll(req, res));
router.get("/personais/:id", (req, res) => personalController.getById(req, res));
router.post("/personais", (req, res) => personalController.create(req, res));
router.put("/personais/:id", (req, res) => personalController.update(req, res));
router.delete("/personais/:id", (req, res) => personalController.delete(req, res));

module.exports = router;
