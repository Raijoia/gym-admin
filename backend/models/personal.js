'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  personal.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    crm: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    data_nasc: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Personal',
    tableName: 'personais',
  });
  return personal;
};
