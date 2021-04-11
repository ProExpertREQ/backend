const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users', [
        {
          nome: 'Luiz',
          matricula: '012345678',
          departamento: 'FGA',
          curso: 'Engenharia de Software',
          email: 'luiz@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz 2',
          matricula: '123456789',
          departamento: 'FGA',
          curso: 'Engenharia de Software',
          email: 'luiz2@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz 3',
          matricula: '234567890',
          departamento: 'FGA',
          curso: 'Engenharia de Software',
          email: 'luiz3@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async () => {},
};
