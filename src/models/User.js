import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Seu nome precisa ter mais que 2 caracteres',
          },
        },
      },
      registration_number: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Essa matrícula já está vinculada a uma conta',
        },
        validate: {
          len: {
            args: [9],
            msg: 'Sua matrícula precisa ter 9 dígitos. (Ex: 123456789)',
          },
        },
      },
      department: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      course: {
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
          msg: 'Esse e-mail já está vinculado a uma conta',
        },
        validate: {
          isEmail: {
            msg: 'Esse e-mail não é válido',
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
            msg: 'Sua senha precisa ter mais que 5 caracteres',
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

  static associate(models) {
    this.hasMany(models.DisciplinasCursadas, { foreignKey: 'user_id' });
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
