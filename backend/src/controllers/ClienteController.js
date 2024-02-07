const Controller = require("./Controller.js");
const ClienteServices = require("../services/ClienteService.js");

const clienteServices = new ClienteServices();

class ClienteController extends Controller {
  constructor() {
    super(clienteServices);
  }
}

module.exports = ClienteController;
