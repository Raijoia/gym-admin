'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo extends Model {
    static associate(models) {
      Tipo.hasMany(models.Personal, {
        foreignKey: 'tipo_id'
      })
      Tipo.hasMany(models.Cliente, {
        foreignKey: 'tipo_id'
      })
    }
  }
  tipo.init({
    tipo_usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tipo',
    tableName: 'tipos',
  });
  return tipo;
};
