"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tipos",
      [
        {
          tipo_usuario: "Personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tipo_usuario: "Cliente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipos', null, {});
  },
};
