import Sequelize, { Model } from 'sequelize';

export default class Departamento extends Model {
  static init(sequelize) {
    super.init({
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
