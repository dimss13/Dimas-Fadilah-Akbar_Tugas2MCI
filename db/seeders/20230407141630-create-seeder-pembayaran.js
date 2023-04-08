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
   await queryInterface.bulkInsert('pembayarans', [
    {
      'tanggalPembayaran': new Date('8/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 1,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPembayaran': new Date('8/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 2,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPembayaran': new Date('1/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 3,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPembayaran': new Date('2/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 4,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPembayaran': new Date('2/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 5,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPembayaran': new Date('5/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 6,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPembayaran': new Date('7/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 7,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPembayaran': new Date('9/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 8,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPembayaran': new Date('9/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 9,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'tanggalPembayaran': new Date('4/4/2023'),
      'metodePembayaran': 'transfer VA',
      'idPendaftaran': 10,
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
