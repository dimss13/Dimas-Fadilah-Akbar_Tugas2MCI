'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('pendaftarans', {
      fields: ['idPengguna'],
      type: 'foreign key',
      name: 'pendaftarans_idPengguna_fk',
      references: {
        table: 'penggunas',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('pendaftarans', {
      fields: ['idAcaraSeminar'],
      type: 'foreign key',
      name: 'pendaftarans_idAcaraSeminar_fk',
      references: {
        table: 'acaraseminars',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('tempatduduks', {
      fields: ['idPengguna'],
      type: 'foreign key',
      name: 'tempatduduks_idPengguna_fk',
      references: {
        table: 'penggunas',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('pembayarans', {
      fields: ['idPendaftaran'],
      type: 'foreign key',
      name: 'pembayarans_idPendaftaran_fk',
      references: {
        table: 'pendaftarans',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('penyelenggaras', {
      fields: ['idAcaraSeminar'],
      type: 'foreign key',
      name: 'penyelenggaras_idAcaraSeminar_fk',
      references: {
        table: 'acaraseminars',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('pembicaras', {
      fields: ['idAcaraSeminar'],
      type: 'foreign key',
      name: 'pembicaras_idAcaraSeminar_fk',
      references: {
        table: 'acaraseminars',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('pendaftarans', 'pendaftarans_idPengguna_fk');
    await queryInterface.removeConstraint('pendaftarans', 'pendaftarans_idAcaraSeminar_fk');
    await queryInterface.removeConstraint('tempatduduks', 'tempatduduks_idPengguna_fk');
    await queryInterface.removeConstraint('pembayarans', 'pembayarans_idPendaftaran_fk');
    await queryInterface.removeConstraint('penyelenggaras', 'penyelenggaras_idAcaraSeminar_fk');
    await queryInterface.removeConstraint('pembicaras', 'pembicaras_idAcaraSeminar_fk');
  }
};
