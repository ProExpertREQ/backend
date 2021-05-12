import { Model } from 'sequelize';

export default class DisciplinasCursadas extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Disciplina, { foreignKey: 'disciplina_id', as: 'hasClasses' });
  }
}
