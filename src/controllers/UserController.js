import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);

      const {
        nome, matricula, departamento, curso, email,
      } = newUser;

      return res.json({
        nome, matricula, departamento, curso, email,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['nome', 'matricula', 'departamento', 'curso', 'email'] });

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

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
}

export default new UserController();
