'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tempatduduk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tempatduduk.init({
    nomorKursi: DataTypes.INTEGER,
    statusKursi: DataTypes.STRING,
    lokasiKursi: DataTypes.STRING,
    idPengguna: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tempatduduk',
  });
  return tempatduduk;
};