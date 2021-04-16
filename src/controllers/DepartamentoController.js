import Departamento from '../models/Departamento';
var cors = require('cors')

class DepartamentoController {
  async create(req, res) {
    try {
      const novoDepartamento = await Departamento.create(req.body);

      const { id, nome } = novoDepartamento;

      return res.json({ id, nome });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    try {
      const departamentos = await Departamento.findAll({ attributes: ['id', 'nome'] });

      if (departamentos.length === 0) {
        return res.json('Não existem departamentos cadastrados.');
      }

      return res.json(departamentos);
    } catch (e) {
      return res.json(null);
    }
  }

  async getDepartamentById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['O ID do departamento não foi enviado.'],
        });
      }

      const departamento = await Departamento.findByPk(id);

      if (!departamento) {
        return res.status(400).json({
          errors: ['Departamento não existe.'],
        });
      }

      const { nome } = departamento;

      return res.json({ id, nome });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['O ID do departamento não foi enviado.'],
        });
      }

      const departamento = await Departamento.findByPk(id);

      if (!departamento) {
        return res.status(400).json({
          errors: ['Departamento não existe.'],
        });
      }

      const novosDados = await departamento.update(req.body);
      const { nome } = novosDados;

      return res.json({ id, nome });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['O ID do departamento não foi enviado.'],
        });
      }

      const departamento = await Departamento.findByPk(id);

      if (!departamento) {
        return res.status(400).json({
          errors: ['O departamento não existe.'],
        });
      }

      await departamento.destroy();

      return res.json(`Departamento: ${departamento.nome} foi deletado.`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new DepartamentoController();
