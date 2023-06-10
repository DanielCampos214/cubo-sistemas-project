'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('Users', { 
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    birthdate:{
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    address:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    creditValue:{
      type: Sequelize.FLOAT,
      allowNull: true,
      defaultValue: 0.0,
    },
    createdAt:{
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt:{
      type: Sequelize.DATE,
      allowNull: false,
    }
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
