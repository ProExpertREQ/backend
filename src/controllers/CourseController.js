import Department from '../models/Department';
import Curso from '../models/Curso';

class CursoController {
  async create(req, res) {
    try {
      const { departamento_id } = req.params;
      const { nome } = req.body;

      const departamento = await Department.findByPk(departamento_id);

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

      const departamento = await Department.findByPk(departamento_id);

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

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['O ID do curso não foi encontrado.'],
        });
      }

      const curso = await Curso.findByPk(req.params.id);

      if (!curso) {
        return res.status(400).json({
          errors: ['O curso procurado não existe.'],
        });
      }

      const { id, nome } = await curso.update(req.body);

      return res.json({ id, nome });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['O ID do curso não foi enviado.'],
        });
      }

      const curso = await Curso.findByPk(req.params.id);

      if (!curso) {
        return res.status(400).json({
          errors: ['O curso não existe.'],
        });
      }

      await curso.destroy();

      return res.json(`O curso '${curso.id} ${curso.nome}' foi deletado.`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CursoController();
