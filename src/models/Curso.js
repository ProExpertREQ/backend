import Sequelize, { Model } from 'sequelize';

export default class Curso extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse curso já foi cadastrado.',
        },
        validate: {
          len: {
            args: [5, 255],
            msg: 'A campo nome precisa ter entre 5 e 255 caracteres.',
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
    this.belongsTo(models.Department, { foreignKey: 'department_id', as: 'hasCourse' });
  }
}
