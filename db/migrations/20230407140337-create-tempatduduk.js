'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tempatduduks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomorKursi: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      statusKursi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lokasiKursi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idPengguna: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('tempatduduks');
  }
};