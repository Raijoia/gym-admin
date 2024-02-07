const Controller = require("./Controller.js");
const TipoServices = require("../services/TipoService.js");

const tipoServices = new TipoServices();

class TipoController extends Controller {
  constructor() {
    super(tipoServices);
  }
}

module.exports = TipoController;
