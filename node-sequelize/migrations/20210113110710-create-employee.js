'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      dob: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      mobile_no: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      unique_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      is_active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      company_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'Companies',
          key: 'id',
          as: 'company_id'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employees');
  }
};