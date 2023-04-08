'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('penyelenggaras', [
    {
      'namaPenyelenggara': 'penylenggara1',
      'alamatPenyelenggara': 'Infomatika ITS',
      'emailPenyelenggara': 'penyelenggara1@gmail.com',
      'idAcaraSeminar': 1,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'namaPenyelenggara': 'penylenggara2',
      'alamatPenyelenggara': 'Di suatu tempat',
      'emailPenyelenggara': 'penyelenggara2@gmail.com',
      'idAcaraSeminar': 2,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'namaPenyelenggara': 'penylenggara1',
      'alamatPenyelenggara': 'Infomatika ITS',
      'emailPenyelenggara': 'penyelenggara1@gmail.com',
      'idAcaraSeminar': 2,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'namaPenyelenggara': 'penylenggara2',
      'alamatPenyelenggara': 'Infomatika ITS',
      'emailPenyelenggara': 'penyelenggara2@gmail.com',
      'idAcaraSeminar': 3,
      'createdAt': new Date(),
      'updatedAt': new Date()
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
