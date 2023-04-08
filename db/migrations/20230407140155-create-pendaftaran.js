'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pendaftarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggalPendaftaran: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      statusPembayaraan: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      idPengguna: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      idAcaraSeminar: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pendaftarans');
  }
};