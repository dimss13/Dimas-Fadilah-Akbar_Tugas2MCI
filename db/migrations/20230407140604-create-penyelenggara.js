'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('penyelenggaras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaPenyelenggara: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alamatPenyelenggara: {
        type: Sequelize.STRING,
        allowNull: false
      },
      emailPenyelenggara: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idAcaraSeminar: {
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
    await queryInterface.dropTable('penyelenggaras');
  }
};