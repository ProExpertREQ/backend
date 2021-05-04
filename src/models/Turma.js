import Sequelize, { Model } from 'sequelize';

export default class Turma extends Model {
  static init(sequelize) {
    super.init({
      codigo: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Essa turma já foi cadastrada.',
        },
      },
      professor: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 255],
            msg: 'A campo precisa ter mais de 5 e menos que 255 caracteres.',
          },
        },
      },
      email_professor: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      sala_professor: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      ano_periodo: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      horario: {
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
    this.belongsTo(models.Disciplina, { foreignKey: 'disciplina_id', as: 'hasClasses' });
  }
}
