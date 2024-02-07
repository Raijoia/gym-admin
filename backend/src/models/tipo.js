'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo extends Model {
    static associate(models) {
      Tipo.hasMany(models.Personal, {
        foreignKey: 'tipo_id'
      })
      Tipo.hasMany(models.Cliente, {
        foreignKey: 'tipo_id'
      })
    }
  }
  Tipo.init({
    tipo_usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tipo',
    tableName: 'tipos',
  });
  return Tipo;
};
