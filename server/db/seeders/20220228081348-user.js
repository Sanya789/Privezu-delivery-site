'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Vsiliy client',
      email: 'a@a',
      password: '123',
      img: '123',
      phone: '3222232',
      raiting: '123',
      auto: 'SUPERTRUK',
      status: true,
      numberAuto: 'x123xx',
      driverLicense: 'x123xx',
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      name: 'Petr driver',
      email: 'b@b',
      password: '123',
      img: '123',
      phone: '123',
      raiting: '123',
      auto: '123',
      status: true,
      numberAuto: '123',
      driverLicense: '123',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),

    }
    ], {});


  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
