import Disciplina from '../models/Disciplina';
import Turma from '../models/Turma';

class TurmaController {
  async create(req, res) {
    try {
      const { disciplina_id } = req.params;
      const {
        codigo,
        professor,
        email_professor,
        sala_professor,
        ano_periodo,
        horario,
        local,
        moodle,
        youtube,
        whatsapp,
        telegram,
      } = req.body;

      const disciplina = await Disciplina.findByPk(disciplina_id);

      if (!disciplina) {
        return res.status(400).json({
          errors: 'Essa disciplina não existe.',
        });
      }

      const turma = await Turma.create({
        disciplina_id,
        codigo,
        professor,
        email_professor,
        sala_professor,
        ano_periodo,
        horario,
        local,
        moodle,
        youtube,
        whatsapp,
        telegram,
      });

      return res.json(turma);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    try {
      const turmas = await Turma.findAll({ attributes: ['id', 'codigo', 'professor', 'email_professor', 'sala_professor', 'ano_periodo', 'horario', 'local', 'moodle', 'youtube', 'whatsapp', 'telegram'] });

      return res.json(turmas);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getClassesByDiscipline(req, res) {
    try {
      const { disciplina_id } = req.params;

      const disciplina = await Disciplina.findByPk(disciplina_id);

      if (!disciplina) {
        return res.status(400).json({
          errors: 'A disciplina não existe.',
        });
      }

      const turmas = await Turma.findAll({
        where: {
          disciplina_id,
        },
        attributes: ['id', 'codigo', 'professor', 'email_professor', 'sala_professor', 'ano_periodo', 'horario', 'local', 'moodle', 'youtube', 'whatsapp', 'telegram'],
      });

      return res.json({ disciplina: disciplina.nome, turmas });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getClassById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['O ID da turma não foi enviado.'],
        });
      }

      const turma = await Turma.findByPk(id);

      if (!turma) {
        return res.status(400).json({
          errors: ['Essa disciplina não existe.'],
        });
      }

      return res.json(turma);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['O ID da turma não foi encontrado.'],
        });
      }

      const turma = await Turma.findByPk(req.params.id);

      if (!turma) {
        return res.status(400).json({
          errors: ['A turma não existe.'],
        });
      }

      const newData = await turma.update(req.body);

      return res.json(newData);
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
          errors: ['O ID da turma não foi enviado.'],
        });
      }

      const turma = await Turma.findByPk(req.params.id);

      if (!turma) {
        return res.status(400).json({
          errors: ['A turma não existe.'],
        });
      }

      await turma.destroy();

      return res.json(`A turma '${turma.id} ${turma.nome}' foi deletada.`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TurmaController();
