import DisciplinasCursadas from '../models/DisciplinasCursadas';
import Turma from '../models/Turma';
import Disciplina from '../models/Subject';

class DisciplinasCursadasController {
  async getAll(req, res) {
    try {
      const user_id = req.userId;
      const allSubjects = await DisciplinasCursadas.findAll({
        where: {
          user_id,
        },
        attributes: ['id', 'faltas', 'presencas', 'turma_id'],
      });

      return res.json(allSubjects);
    } catch (e) {
      return res.status(400).json({
        errors: ['Bad Request.'],
      });
    }
  }

  async getById(req, res) {
    try {
      const minhaDisciplina = await DisciplinasCursadas.findByPk(req.params.id, {
        attributes: ['id', 'faltas', 'presencas', 'turma_id'],
      });

      if (!minhaDisciplina) {
        return res.status(400).json({
          errors: ['Não encontrada.'],
        });
      }

      const turma = await Turma.findByPk(minhaDisciplina.turma_id);
      const dadosDisciplina = await Disciplina.findByPk(turma.disciplina_id, {
        attributes: ['id', 'nome', 'codigo', 'curso_id'],
      });

      return res.json({
        id: minhaDisciplina.id,
        disciplina_id: dadosDisciplina.id,
        turma_id: minhaDisciplina.turma_id,
        curso_id: dadosDisciplina.curso_id,
        nome: dadosDisciplina.nome,
        codigo: dadosDisciplina.codigo,
        faltas: minhaDisciplina.faltas,
        presencas: minhaDisciplina.presencas,
      });
    } catch (e) {
      return res.status(400).json({
        errors: ['Bad Request'],
      });
    }
  }

  async addAbsences(req, res) {
    try {
      const subject = await DisciplinasCursadas.findByPk(req.params.id);

      if (!subject) {
        return res.status(400).json({
          errors: ['Não encontrada.'],
        });
      }

      const faltas = subject.faltas + 1;
      const newData = await subject.update({ faltas });

      return res.json({ faltas: newData.faltas });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async removeAbsences(req, res) {
    try {
      const subject = await DisciplinasCursadas.findByPk(req.params.id);

      if (!subject) {
        return res.status(400).json({
          errors: ['Não encontrada.'],
        });
      }

      if (subject.faltas === 0) {
        return res.status(400).json({
          errors: ['O número de faltas deve ser um número entre 0 e 100'],
        });
      }

      const faltas = subject.faltas - 1;

      const newData = await subject.update({ faltas });

      return res.json({ Faltas: newData.faltas });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async addPresence(req, res) {
    try {
      const subject = await DisciplinasCursadas.findByPk(req.params.id);

      if (!subject) {
        return res.status(400).json({
          errors: ['Não encontrada.'],
        });
      }

      const presencas = subject.presencas + 1;
      const newData = await subject.update({ presencas });

      return res.json({ Presenças: newData.presencas });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async removePresence(req, res) {
    try {
      const subject = await DisciplinasCursadas.findByPk(req.params.id);

      if (!subject) {
        return res.status(400).json({
          errors: ['Não encontrada.'],
        });
      }

      if (subject.presencas === 0) {
        return res.status(400).json({
          errors: ['O número de faltas deve ser um número entre 0 e 100'],
        });
      }

      const presencas = subject.presencas - 1;
      const newData = await subject.update({ presencas });

      return res.json({ Presenças: newData.presencas });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new DisciplinasCursadasController();
