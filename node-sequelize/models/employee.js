'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Company, {
        foreignKey: 'company_id',
        onDelete: 'CASCADE'
      });
    }
  };
  Employee.init({
    first_name: DataTypes.STRING(10),
    last_name: DataTypes.STRING(10),
    dob: DataTypes.DATEONLY,
    mobile_no: DataTypes.STRING(10),
    unique_id: DataTypes.UUID,
    is_active: DataTypes.BOOLEAN,
    company_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};