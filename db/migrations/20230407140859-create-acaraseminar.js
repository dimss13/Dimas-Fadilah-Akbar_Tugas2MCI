'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('acaraseminars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaSeminar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tanggalSeminar: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      lokasiSeminar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hargaTiket: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('acaraseminars');
  }
};