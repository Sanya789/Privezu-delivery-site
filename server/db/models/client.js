'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Order, {
        foreignKey: 'clientId',
      });
    }
  }
  Client.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    img: DataTypes.STRING,
    phone: DataTypes.STRING,
    raiting: DataTypes.STRING,
    auto: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    numberAuto: DataTypes.STRING,
    driverLicense: DataTypes.STRING,
    roleId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};