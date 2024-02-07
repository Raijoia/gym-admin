const dataSource = require("../models");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAllRegister() {
    return dataSource[this.model].findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.model].findByPk({ where: { id } });
  }

  async createRegister(register) {
    return dataSource[this.model].create(register);
  }

  async updateRegister(id, updateData) {
    const updatedList = dataSource[this.model].update(updateData, {
      where: { id },
    });
    if (updatedList[0] === 0) return false;
    return true;
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({ where: { id } });
  }
}

module.exports = Services;
