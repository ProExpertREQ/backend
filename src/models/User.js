import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'A campo nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      matricula: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Essa matrícula já está vinculada a uma conta.',
        },
        validate: {
          len: {
            args: [9],
            msg: 'A campo matrícula precisa ter 9 dígitos.',
          },
        },
      },
      departamento: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      curso: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      is_superuser: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse e-mail já está vinculado a uma conta.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 50],
            msg: 'A senha precisa ter entre 5 e 50 caracteres.',
          },
        },
      },
    },
    {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }
}
