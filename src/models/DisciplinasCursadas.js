import Sequelize, { Model } from 'sequelize';

export default class DisciplinasCursadas extends Model {
  static init(sequelize) {
    super.init({
      faltas: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
      presencas: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'hasClasses' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'hasSubjects' });
  }
}
