'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personal extends Model {
    static associate(models) {
      Personal.belongsTo(models.Tipo, {
        foreignKey: 'tipo_id'
      })
      Personal.hasMany(models.Treino, {
        foreignKey: 'personal_id'
      })
      Personal.hasMany(models.Cliente, {
        foreignKey: 'personal_id'
      })
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
