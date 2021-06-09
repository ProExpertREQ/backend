import Sequelize, { Model } from 'sequelize';

export default class Class extends Model {
  static init(sequelize) {
    super.init({
      code: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Essa turma já foi cadastrada',
        },
        validate: {
          len: {
            args: [3, 5],
            msg: 'O código da turma precisa ter mais de 2 caracteres',
          },
        },
      },
      professor: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome do professor precisa ter mais que  3 caracteres',
          },
        },
      },
      email_professor: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'O e-mail do professor é inválido',
          },
        },
      },
      room_professor: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      year_term: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      schedule: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      local: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      moodle: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      teams: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      youtube: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      whatsapp: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      telegram: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    },
    {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Subject, { foreignKey: 'subject_id', as: 'hasClasses' });
  }
}
