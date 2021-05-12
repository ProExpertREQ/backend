import Sequelize, { Model } from 'sequelize';

export default class Departamento extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      codigo: {
        type: Sequelize.STRING,
        unique: {
          msg: 'Esse departamento já foi cadastrado.',
        },
      },
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse departamento já foi cadastrado.',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'A campo nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
    },
    {
      sequelize,
    });

    return this;
  }
}
