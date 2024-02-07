'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('personais', [{
      nome: 'Raí Joia',
      email: 'raijoiamv@gmail.com',
      telefone: '119999999',
      data_nasc: '2005-12-12',
      crm: '123456',
      cpf: '123456789',
      tipo_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('personais', null, {});
  }
};
