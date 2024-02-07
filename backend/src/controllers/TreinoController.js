const Controller = require("./Controller.js");
const TreinoServices = require("../services/TreinoService.js");

const treinoServices = new TreinoServices();

class TreinoController extends Controller {
  constructor() {
    super(treinoServices);
  }
}

module.exports = TreinoController;
