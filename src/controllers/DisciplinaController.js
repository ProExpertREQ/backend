import Curso from '../models/Curso';
import Disciplina from '../models/Disciplina';

class DisciplinaController {
  async create(req, res) {
    try {
      const { curso_id } = req.params;
      const { nome, codigo } = req.body;

      const curso = await Curso.findByPk(curso_id);

      if (!curso) {
        return res.status(400).json({
          errors: 'Esse curso não existe.',
        });
      }

      const disciplina = await Disciplina.create({ curso_id, nome, codigo });

      const dados = {
        curso_id: curso.id,
        curso: curso.nome,
        id_disciplina: disciplina.id,
        disciplina: disciplina.nome,
      };

      return res.json(dados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    try {
      const disciplinas = await Disciplina.findAll({ attributes: ['id', 'nome'] });

      return res.json(disciplinas);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getDisciplinesByCourse(req, res) {
    try {
      const { curso_id } = req.params;

      const curso = await Curso.findByPk(curso_id);

      if (!curso) {
        return res.status(400).json({
          errors: 'O curso não existe.',
        });
      }

      const disciplinas = await Disciplina.findAll({
        where: {
          curso_id,
        },
        attributes: ['id', 'nome'],
      });

      return res.json({ Curso: curso.nome, disciplinas });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new DisciplinaController();
