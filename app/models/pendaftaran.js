'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pendaftaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pendaftaran.init({
    tanggalPendaftaran: DataTypes.DATEONLY,
    statusPembayaraan: DataTypes.BOOLEAN,
    idPengguna: DataTypes.INTEGER,
    idAcaraSeminar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pendaftaran',
  });
  return pendaftaran;
};