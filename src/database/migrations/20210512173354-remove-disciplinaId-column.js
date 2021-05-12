module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('disciplinasCursadas', 'disciplina_id', {});
  },

  down: async (queryInterface, Sequelize) => {},
};
