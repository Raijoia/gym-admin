'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class treino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  treino.init({
    exercicio_repeticoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'treino',
    tableName: 'treinos',
  });
  return treino;
};
