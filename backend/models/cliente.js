'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.belongsTo(models.Tipo, {
        foreignKey: 'tipo_id'
      })
      Cliente.belongsTo(models.Personal, {
        foreignKey: 'personal_id'
      })
      Cliente.hasOne(models.Treino, {
        foreignKey: 'cliente_id'
      })
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    data_nasc: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes',
  });
  return Cliente;
};
