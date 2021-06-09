import MyClass from '../models/MyClass';
import Class from '../models/Class';
import Subject from '../models/Subject';

class MyClassController {
  async getAll(req, res) {
    const user_id = req.userId;

    const myClasses = await MyClass.findAll({
      where: {
        user_id,
      },
      attributes: ['id', 'absences', 'presences', 'class_id'],
    });

    return res.status(201).json(myClasses);
  }

  async getById(req, res) {
    const { id } = req.params;
    const myClass = await MyClass.findByPk(id, {
      attributes: ['id', 'absences', 'presences', 'class_id'],
    });

    if (!myClass) {
      return res.status(400).json({
        error: 'Turma não encontrada',
      });
    }

    const theClass = await Class.findByPk(myClass.class_id);
    const subjectData = await Subject.findByPk(theClass.subject_id, {
      attributes: ['id', 'name', 'code', 'course_id'],
    });

    return res.json({
      id: myClass.id,
      subject_id: subjectData.id,
      class_id: myClass.class_id,
      course_id: subjectData.course_id,
      name: subjectData.name,
      code: subjectData.code,
      absences: myClass.absences,
      presences: myClass.presences,
    });
  }

  async addAbsences(req, res) {
    try {
      const { id } = req.params;
      const myClass = await MyClass.findByPk(id);

      if (!myClass) {
        return res.status(400).json({
          error: 'Turma não encontrada',
        });
      }

      const absences = myClass.absences + 1;
      const newAbsences = await myClass.update({ absences });

      return res.json({ Absences: newAbsences.absences });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async removeAbsences(req, res) {
    try {
      const { id } = req.params;
      const myClass = await MyClass.findByPk(id);

      if (!myClass) {
        return res.status(400).json({
          error: 'Turma não encontrada',
        });
      }

      if (myClass.absences === 0) {
        return res.status(400).json({
          error: 'O número de faltas não pode ser menor que 0',
        });
      }

      const absences = myClass.absences - 1;
      const newAbsences = await myClass.update({ absences });

      return res.json({ Absences: newAbsences.absences });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async addPresence(req, res) {
    try {
      const { id } = req.params;
      const myClass = await MyClass.findByPk(id);

      if (!myClass) {
        return res.status(400).json({
          error: 'Turma não encontrada',
        });
      }

      const presences = myClass.presences + 1;
      const newPresences = await myClass.update({ presences });

      return res.json({ Presences: newPresences.presences });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async removePresence(req, res) {
    try {
      const { id } = req.params;
      const myClass = await MyClass.findByPk(id);

      if (!myClass) {
        return res.status(400).json({
          error: 'Turma não encontrada',
        });
      }

      if (myClass.presences === 0) {
        return res.status(400).json({
          error: 'O número de presenças não pode ser menor que 0',
        });
      }

      const presences = myClass.presences - 1;
      const newPresences = await myClass.update({ presences });

      return res.json({ Presences: newPresences.presences });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new MyClassController();
