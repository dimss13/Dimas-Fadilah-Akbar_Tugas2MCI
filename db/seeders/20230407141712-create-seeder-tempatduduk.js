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
   await queryInterface.bulkInsert('tempatduduks', [
    {
      'nomorKursi': 1,
      'statusKursi': "tersedia",
      'lokasiKursi': "A",
      'idPengguna': 1,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'nomorKursi': 1,
      'statusKursi': "tersedia",
      'lokasiKursi': "B",
      'idPengguna': 2,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'nomorKursi': 10,
      'statusKursi': "tersedia",
      'lokasiKursi': "A",
      'idPengguna': 3,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'nomorKursi': 5,
      'statusKursi': "tersedia",
      'lokasiKursi': "B",
      'idPengguna': 4,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'nomorKursi': 2,
      'statusKursi': "tersedia",
      'lokasiKursi': "A",
      'idPengguna': 5,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'nomorKursi': 4,
      'statusKursi': "tersedia",
      'lokasiKursi': "A",
      'idPengguna': 6,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'nomorKursi': 8,
      'statusKursi': "tersedia",
      'lokasiKursi': "A",
      'idPengguna': 7,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'nomorKursi': 3,
      'statusKursi': "tersedia",
      'lokasiKursi': "B",
      'idPengguna': 8,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'nomorKursi': 1,
      'statusKursi': "tersedia",
      'lokasiKursi': "C",
      'idPengguna': 9,
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      'nomorKursi': 2,
      'statusKursi': "tersedia",
      'lokasiKursi': "C",
      'idPengguna': 10,
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
