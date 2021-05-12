import DisciplinasCursadas from '../models/DisciplinasCursadas';

class DisciplinasCursadasController {
  async getAll(req, res) {
    try {
      const user_id = req.userId;
      const allSubjects = await DisciplinasCursadas.findAll({
        where: {
          user_id,
        },
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
      const minhaDisciplina = await DisciplinasCursadas.findByPk(req.params.id);

      if (!minhaDisciplina) {
        return res.status(400).json({
          errors: ['Não encontrada.'],
        });
      }

      return res.json(minhaDisciplina);
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
        errors: ['deu ruim'],
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
          errors: ['Bad Request'],
        });
      }

      const faltas = subject.faltas - 1;
      const newData = await subject.update({ faltas });

      return res.json({ Faltas: newData.faltas });
    } catch (error) {
      return res.status(400).json({
        errors: ['deu ruim'],
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
        errors: ['deu ruim'],
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
          errors: ['Bad Request'],
        });
      }

      const presencas = subject.presencas - 1;
      const newData = await subject.update({ presencas });

      return res.json({ Presenças: newData.presencas });
    } catch (error) {
      return res.status(400).json({
        errors: ['deu ruim'],
      });
    }
  }
}

export default new DisciplinasCursadasController();
