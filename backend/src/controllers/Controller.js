class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const registerList = await this.entityService.getAllRegister();
      return res.status(200).json(registerList);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const register = await this.entityService.getRegisterById(Number(id));
      return res.status(200).json(register);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async create(req, res) {
    try {
      const newRegister = req.body;
      const creatingRegister = await this.entityService.createRegister(
        newRegister
      );
      return res.status(201).json(creatingRegister);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const isUpdated = await this.entityService.updateRegister(
        Number(id),
        updatedData
      );
      if (!isUpdated)
        return res.status(404).json({ message: "Registro não encontrado" });
      return res
        .status(200)
        .json({ message: "Registro atualizado com sucesso" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await this.entityService.deleteRegister(Number(id));
      return res.status(200).json({ message: "Registro deletado com sucesso" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;
