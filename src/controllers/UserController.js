import bcryptjs from 'bcryptjs';
import { next } from 'sucrase/dist/parser/tokenizer';
import User from '../models/User';

require('dotenv').config();

import jwt from 'jsonwebtoken';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const {
        nome, departamento, curso, email,
      } = newUser;
      return res.json({
        message: 'success',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.findAll({ attributes: ['nome', 'matricula', 'departamento', 'curso', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async getUserById(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      const {
        nome, matricula, departamento, curso, email,
      } = user;

      return res.json({
        nome, matricula, departamento, curso, email,
      });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      const {
        nome, matricula, departamento, curso, email,
      } = novosDados;

      return res.json({
        nome, matricula, departamento, curso, email,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();

      return res.json(`O usuário vinculado a matrícula ${user.matricula} foi excluído.`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async login(req, res) {
    const { email = '', password = '' } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas.'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe.'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha incorreta.'],
      });
    }

    const { id } = user;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ "token" : token , "userId" : id , message: 'success' });
  }

  async changePassword(req, res) {
    try {
      const { oldPassword = '', newPassword = '' } = req.body;

      if (!oldPassword || !newPassword) {
        return res.status(401).json({
          errors: ['Credenciais inválidas.'],
        });
      }

      if (oldPassword === newPassword) {
        return res.status(400).json({
          errors: ['A nova senha é igual a antiga.'],
        });
      }

      const user = await User.findByPk(10);

      if (!user) {
        return res.status(404).json({
          error: ['O usuário não existe.'],
        });
      }

      if (!(await user.passwordIsValid(oldPassword))) {
        return res.status(401).json({
          errors: ['Senha incorreta.'],
        });
      }

      const password_hash = await bcryptjs.hash(newPassword, 8);

      const updatedUser = await user.update({ password_hash });

      return res.json({
        nome: updatedUser.nome,
        matricula: updatedUser.matricula,
        departamento: updatedUser.departamento,
        curso: updatedUser.curso,
        email: updatedUser.email,
      });
    } catch (e) {
      return e;
    }
  }
}

export default new UserController();
