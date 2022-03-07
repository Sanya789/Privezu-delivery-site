'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'clientId', as :'client'
     });
     this.belongsTo(models.User, {
      foreignKey: 'driverId', as: 'driver'
   });
  //    this.belongsTo(models.D, {
  //     foreignKey: 'driverId',
  //  });
      
    }
  }
  Order.init({
    departure: DataTypes.STRING,
    destination: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    volume: DataTypes.STRING,
    length: DataTypes.STRING,
    width: DataTypes.STRING,
    heigth: DataTypes.STRING,
    weight: DataTypes.STRING,
    departureDate: DataTypes.STRING,
    destinationDate: DataTypes.STRING,
    price: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    clientId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    cargoCost: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};