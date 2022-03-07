'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkInsert('Roles', [{
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
       
      },
      {
        role: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
       
      },
      {
        role: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
       
      }], {});
   
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
