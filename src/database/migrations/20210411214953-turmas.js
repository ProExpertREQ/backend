module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('turmas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      disciplina_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'disciplinas',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sala_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano_periodo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      horario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      local: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      moodle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      teams: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      youtube: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telegram: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('turmas');
  },
};
