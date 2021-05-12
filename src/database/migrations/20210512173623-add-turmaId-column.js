module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('disciplinasCursadas', 'turma_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'disciplinas',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {},
};
