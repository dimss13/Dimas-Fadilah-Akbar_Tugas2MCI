'use strict';

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
   await queryInterface.bulkInsert('pendaftarans', [
    {
      'tanggalPendaftaran': new Date('5/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 1,
      'idAcaraSeminar': 2, 
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPendaftaran': new Date('5/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 9,
      'idAcaraSeminar': 2, 
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPendaftaran': new Date('11/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 10,
      'idAcaraSeminar': 2, 
      'createdAt': new Date(),
      'updatedAt': new Date()
    },    {
      'tanggalPendaftaran': new Date('12/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 2,
      'idAcaraSeminar': 1, 
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPendaftaran': new Date('1/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 3,
      'idAcaraSeminar': 1, 
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPendaftaran': new Date('5/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 4,
      'idAcaraSeminar': 1, 
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPendaftaran': new Date('8/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 5,
      'idAcaraSeminar': 3, 
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPendaftaran': new Date('4/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 6,
      'idAcaraSeminar': 3, 
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPendaftaran': new Date('7/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 7,
      'idAcaraSeminar': 3, 
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPendaftaran': new Date('2/3/2023'),
      'statusPembayaraan': true,
      'idPengguna': 8,
      'idAcaraSeminar': 2, 
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
