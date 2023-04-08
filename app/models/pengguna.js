'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengguna extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pengguna.init({
    namaPengguna: DataTypes.STRING,
    email: DataTypes.STRING,
    noTelp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pengguna',
  });
  return pengguna;
};