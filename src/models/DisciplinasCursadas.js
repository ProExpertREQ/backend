import Sequelize, { Model } from 'sequelize';

export default class DisciplinasCursadas extends Model {
  static init(sequelize) {
    super.init({
      faltas: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
        validate: {
          max: {
            args: 100,
            msg: 'O número de faltas deve ser um número entre 0 e 100',
          },
        },
      },
      presencas: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
        validate: {
          max: {
            args: 100,
            msg: 'O número de presenças deve ser um número entre 0 e 100 não pode adicionar mais presenças.',
          },
        },
      },
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'hasClasses' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'hasSubjects' });
  }
}
