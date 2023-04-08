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

    await queryInterface.bulkInsert('penggunas', [
      {
        'namaPengguna': "pengguna1",
        'email': "pengguna1@gmai.com",
        'noTelp': "08xxxxxxxxxx",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'namaPengguna': "pengguna2",
        'email': "pengguna2@gmai.com",
        'noTelp': "08xxxxxxxxxx",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'namaPengguna': "pengguna3",
        'email': "pengguna3@gmai.com",
        'noTelp': "08xxxxxxxxxx",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'namaPengguna': "pengguna4",
        'email': "pengguna4@gmai.com",
        'noTelp': "08xxxxxxxxxx",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'namaPengguna': "pengguna5",
        'email': "pengguna5@gmai.com",
        'noTelp': "08xxxxxxxxxx",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'namaPengguna': "pengguna6",
        'email': "pengguna6@gmai.com",
        'noTelp': "08xxxxxxxxxx",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'namaPengguna': "pengguna7",
        'email': "pengguna7@gmai.com",
        'noTelp': "08xxxxxxxxxx",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'namaPengguna': "pengguna8",
        'email': "pengguna8@gmai.com",
        'noTelp': "08xxxxxxxxxx",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'namaPengguna': "pengguna9",
        'email': "pengguna9@gmai.com",
        'noTelp': "08xxxxxxxxxx",
        'createdAt': new Date(),
        'updatedAt': new Date()
      },
      {
        'namaPengguna': "pengguna10",
        'email': "pengguna10@gmai.com",
        'noTelp': "08xxxxxxxxxx",
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
