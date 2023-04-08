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
   await queryInterface.bulkInsert('pembicaras', [
    {
      'namaPembicara': 'pembicara1',
      'topic': 'topic1',
      'emailPembicara': 'pembicara1@gmail.com',
      'idAcaraSeminar': 2,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'namaPembicara': 'pembicara5',
      'topic': 'topic5',
      'emailPembicara': 'pembicara5@gmail.com',
      'idAcaraSeminar': 2,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'namaPembicara': 'pembicara2',
      'topic': 'topic2',
      'emailPembicara': 'pembicara2@gmail.com',
      'idAcaraSeminar': 1,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'namaPembicara': 'pembicara3',
      'topic': 'topic3',
      'emailPembicara': 'pembicara3@gmail.com',
      'idAcaraSeminar': 1,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'namaPembicara': 'pembicara4',
      'topic': 'topic4',
      'emailPembicara': 'pembicara4@gmail.com',
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
