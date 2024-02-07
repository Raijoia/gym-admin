'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treino extends Model {
    static associate(models) {
      Treino.belongsTo(models.Personal, {
        foreignKey: 'personal_id',
      });
      Treino.belongsTo(models.Cliente, {
        foreignKey: 'cliente_id',
      });
    }
  }
  Treino.init({
    exercicio_repeticoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Treino',
    tableName: 'treinos',
  });
  return Treino;
};
