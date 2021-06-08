require('dotenv').config();

import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';
// import DisciplinasCursadas from '../models/DisciplinasCursadas';

class UserController {
  async create(req, res) {
    try {
      const {
        name,
        registration_number,
        email,
        password,
      } = req.body;

      await User.create({
        name,
        registration_number,
        email,
        password,
      });

      return res.status(201).json({ message: 'success' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['name', 'registration_number', 'department', 'course', 'email'],
      });

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async getUserById(req, res) {
    const id = req.userId;
    const user = await User.findByPk(id, {
      attributes: [
        'name',
        'registration_number',
        'department',
        'course',
        'email',
      ],
    });

    return res.json(user);
  }

  async update(req, res) {
    try {
      const id = req.userId;
      const userExists = await User.findByPk(id);

      const {
        name,
        registration_number,
        email,
      } = req.body;

      const data = await userExists.update({
        name,
        registration_number,
        email,
      });

      const user = {
        name: data.name,
        registration_number: data.registration_number,
        department: data.department,
        course: data.course,
      };

      return res.status(200).json({ user, message: 'success' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    const id = req.userId;
    const user = await User.findByPk(id);

    await user.destroy();

    return res.json({ message: 'updated' });
  }

  async login(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha incorreta'],
      });
    }

    const { id } = user;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, userId: id, message: 'success' });
  }

  async changePassword(req, res) {
    try {
      const { oldPassword = '', newPassword = '' } = req.body;

      if (!oldPassword || !newPassword) {
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }

      if (oldPassword === newPassword) {
        return res.status(400).json({
          errors: ['Sua nova senha é igual a antiga'],
        });
      }

      const id = req.userId;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({
          error: ['O usuário não existe'],
        });
      }

      if (!(await user.passwordIsValid(oldPassword))) {
        return res.status(401).json({
          errors: ['Sua senha antiga está incorreta'],
        });
      }

      const password_hash = await bcryptjs.hash(newPassword, 8);

      await user.update({ password_hash });

      return res.json({ message: 'success' });
    } catch (e) {
      return e;
    }
  }
}

export default new UserController();
