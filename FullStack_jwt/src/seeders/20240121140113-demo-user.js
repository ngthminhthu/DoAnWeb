"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "John Doe",
          password: "mmmmmmm",
          username: "nbnnnnnn",
        },
        {
          email: "John Doe2",
          password: "aaaaaa",
          username: "gfgfgfg",
        },
        {
          email: "John Doe5",
          password: "dfgdfgdfgdg",
          username: "nhnnbnvbn",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
