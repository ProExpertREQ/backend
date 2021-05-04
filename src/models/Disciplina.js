import Sequelize, { Model } from 'sequelize';

export default class Disciplina extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Essa disciplina já foi cadastrada.',
        },
        validate: {
          len: {
            args: [5, 255],
            msg: 'A campo nome precisa ter entre 5 e 255 caracteres.',
          },
        },
      },
      codigo: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse código pertence a uma disciplina que já foi cadastrada.',
        },
      },
    },
    {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'hasDisciplines' });
  }
}
