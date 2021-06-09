module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('my_classes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      absences: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      presences: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      class_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'classes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('my_classes');
  },
};
