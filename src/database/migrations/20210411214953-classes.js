module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('classes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      subject_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'subjects',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      code: {
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
      room_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      year_term: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      schedule: {
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
    await queryInterface.dropTable('classes');
  },
};
