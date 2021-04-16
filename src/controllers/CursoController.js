import Departamento from '../models/Departamento';
import Curso from '../models/Curso';

class CursoController {
  async create(req, res) {
    try {
      const { departamento_id } = req.params;
      const { nome } = req.body;

      const departamento = await Departamento.findByPk(departamento_id);

      if (!departamento) {
        return res.status(400).json({
          errors: 'O departamento não existe.',
        });
      }

      const curso = await Curso.create({ departamento_id, nome });

      const dados = { departamento: departamento.nome, curso_id: curso.id, nome: curso.nome };

      return res.json(dados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    try {
      const cursos = await Curso.findAll({ attributes: ['id', 'nome'] });

      return res.json(cursos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getCoursesByDepartament(req, res) {
    try {
      const { departamento_id } = req.params;

      const departamento = await Departamento.findByPk(departamento_id);

      if (!departamento) {
        return res.status(400).json({
          errors: 'O departamento não existe.',
        });
      }

      const cursos = await Curso.findAll({
        where: {
          departamento_id,
        },
        attributes: ['id', 'nome'],
      });

      return res.json({ departamento: departamento.nome, cursos });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getCourseById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['O ID do curso não foi enviado.'],
        });
      }

      const curso = await Curso.findByPk(id);

      if (!curso) {
        return res.status(400).json({
          errors: ['Esse curso não existe.'],
        });
      }

      const { departamento_id, nome } = curso;

      return res.json({ departamento_id, id, nome });
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new CursoController();
