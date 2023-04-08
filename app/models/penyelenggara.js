'use strict';
const {
  Model
} = require('sequelize');
const database = require('../../config/database');
module.exports = (sequelize, DataTypes) => {
  class penyelenggara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  penyelenggara.init({
    namaPenyelenggara: DataTypes.STRING,
    alamatPenyelenggara: DataTypes.STRING,
    emailPenyelenggara: DataTypes.STRING,
    idAcaraSeminar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'penyelenggara',
  });
  return penyelenggara;
};