'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('guiaexame', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      gui_numeroguia: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      gui_exame: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      int_codigo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'internacao', key: 'id'},
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('guiaexame');
  }
};
