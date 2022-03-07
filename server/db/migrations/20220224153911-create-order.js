'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departure: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.STRING
      },
      width: {
        type: Sequelize.STRING
      },
      heigth: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      departureDate: {
        type: Sequelize.STRING
      },
      destinationDate: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
              tableName: 'Users',
          },
      key: 'id',
      },
    },
      driverId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
              tableName: 'Users',
          },
      key: 'id',
      },
    },
      cargoCost: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};