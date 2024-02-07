const { Router } = require("express");
const ClienteController = require("../controllers/ClienteController.js");

const clienteController = new ClienteController();

const router = Router();

router.get("/clientes", (req, res) => clienteController.getAll(req, res));
router.get("/clientes/:id", (req, res) => clienteController.getById(req, res));
router.post("/clientes", (req, res) => clienteController.create(req, res));
router.put("/clientes/:id", (req, res) => clienteController.update(req, res));
router.delete("/clientes/:id", (req, res) => clienteController.delete(req, res));

module.exports = router;
