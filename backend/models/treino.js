'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
