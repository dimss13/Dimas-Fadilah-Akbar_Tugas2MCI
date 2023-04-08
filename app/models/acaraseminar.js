'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class acaraseminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  acaraseminar.init({
    namaSeminar: DataTypes.STRING,
    tanggalSeminar: DataTypes.DATEONLY,
    lokasiSeminar: DataTypes.STRING,
    hargaTiket: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'acaraseminar',
  });
  return acaraseminar;
};