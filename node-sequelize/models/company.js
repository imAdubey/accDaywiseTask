'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Employee,{
        foreignKey: 'company_id',
        as: 'employees'
      });
    }
  };
  Company.init({
    name: DataTypes.STRING(20)
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};