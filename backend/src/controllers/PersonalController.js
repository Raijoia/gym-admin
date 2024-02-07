const Controller = require("./Controller.js");
const PersonalServices = require("../services/PersonalService.js");

const personalServices = new PersonalServices();

class PersonalController extends Controller {
  constructor() {
    super(personalServices);
  }
}

module.exports = PersonalController;
