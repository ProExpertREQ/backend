module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('disciplinasCursadas', 'id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    });
  },

  down: async () => {},
};
