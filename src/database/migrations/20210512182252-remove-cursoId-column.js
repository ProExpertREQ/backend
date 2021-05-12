module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('disciplinasCursadas', 'curso_id', {});
  },

  down: async () => {},
};
