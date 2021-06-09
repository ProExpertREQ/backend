import Sequelize, { Model } from 'sequelize';

export default class Department extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse departamento já foi cadastrado',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome do departamento precisa ter mais que 3 caracteres',
          },
        },
      },
      code: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse código já está vinculado a um departamento',
        },
        validate: {
          len: {
            args: [3, 5],
            msg: 'O código do departamento é inválido',
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
