'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pembayaran.init({
    tanggalPembayaran: DataTypes.DATEONLY,
    metodePembayaran: DataTypes.STRING,
    idPendaftaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pembayaran',
  });
  return pembayaran;
};