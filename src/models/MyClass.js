import Sequelize, { Model } from 'sequelize';

export default class MyClass extends Model {
  static init(sequelize) {
    super.init({
      absences: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
        validate: {
          max: {
            args: 100,
            msg: 'O número de faltas deve ser um número entre 0 e 100',
          },
        },
      },
      presences: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
        validate: {
          max: {
            args: 100,
            msg: 'O número de presenças deve ser um número entre 0 e 100',
          },
        },
      },
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Class, { foreignKey: 'class_id', as: 'hasClasses' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'hasSubjects' });
  }
}
