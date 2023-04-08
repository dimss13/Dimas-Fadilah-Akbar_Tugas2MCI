'use strict';

const { QueryError } = require('sequelize');
const DateOnly = require('dateonly');

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
   await queryInterface.bulkInsert('acaraseminars', [
    {
      'namaSeminar': 'seminar1',
      'tanggalSeminar': new Date('4/10/2023'),
      'lokasiSeminar': 'Gedung Riset Center lt. 5',
      'hargaTiket': '25.000',
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'namaSeminar': 'seminar2',
      'tanggalSeminar': new Date('5/10/2023'),
      'lokasiSeminar': 'Gedung Riset Center lt. 5',
      'hargaTiket': '20.000',
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'namaSeminar': 'seminar3',
      'tanggalSeminar': new Date('6/10/2023'),
      'lokasiSeminar': 'Menara Sains lt. 2',
      'hargaTiket': '30.000',
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
