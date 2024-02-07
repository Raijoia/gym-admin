const { Router } = require("express");
const TreinoController = require("../controllers/TreinoController.js");

const treinoController = new TreinoController();

const router = Router();

router.get("/treinos", (req, res) => treinoController.getAll(req, res));
router.get("/treinos/:id", (req, res) => treinoController.getById(req, res));
router.post("/treinos", (req, res) => treinoController.create(req, res));
router.put("/treinos/:id", (req, res) => treinoController.update(req, res));
router.delete("/treinos/:id", (req, res) => treinoController.delete(req, res));

module.exports = router;
