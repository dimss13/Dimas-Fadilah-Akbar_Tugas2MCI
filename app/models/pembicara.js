'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembicara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pembicara.init({
    namaPembicara: DataTypes.STRING,
    topic: DataTypes.STRING,
    emailPembicara: DataTypes.STRING,
    idAcaraSeminar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pembicara',
  });
  return pembicara;
};