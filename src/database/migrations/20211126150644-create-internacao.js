'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('internacao', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      int_paciente: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      int_convenio: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      int_medico: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      int_codigocid: {
        allowNull: false,
        type: Sequelize.STRING(5),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('internacao');
  }
};
