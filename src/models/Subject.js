import Sequelize, { Model } from 'sequelize';

export default class Subject extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Essa disciplina já foi cadastrada',
        },
        validate: {
          len: {
            args: [5, 255],
            msg: 'O nome precisa ter mais que 5 caracteres',
          },
        },
      },
      code: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse código já está vinculado a uma disciplina',
        },
        validate: {
          len: {
            args: [3, 5],
            msg: 'O código da disciplina precisa ter mais de 2 caracteres',
          },
        },
      },
    },
    {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Course, { foreignKey: 'course_id', as: 'hasSubjects' });
  }
}
