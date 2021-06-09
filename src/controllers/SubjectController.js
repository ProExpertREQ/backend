import Course from '../models/Course';
import Subject from '../models/Subject';

class SubjectController {
  async create(req, res) {
    try {
      const { course_id } = req.params;
      const { name, code } = req.body;

      const course = await Course.findByPk(course_id);

      if (!course) {
        return res.status(400).json({
          error: 'Curso não encontrado',
        });
      }

      await Subject.create({ name, code, course_id });

      return res.status(201).json({ message: 'success' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    const subjects = await Subject.findAll({ attributes: ['id', 'name', 'code'] });

    return res.status(200).json(subjects);
  }

  async getDisciplinesByCourse(req, res) {
    const { course_id } = req.params;

    const course = await Course.findByPk(course_id);

    if (!course) {
      return res.status(400).json({
        errors: 'Esse curso não existe',
      });
    }

    const subjects = await Subject.findAll({
      where: {
        course_id,
      },
      attributes: ['id', 'name', 'code'],
    });

    return res.json({ Course: course.name, subjects });
  }

  async getDisciplineById(req, res) {
    const { id } = req.params;

    const subject = await Subject.findByPk(id);

    if (!subject) {
      return res.status(400).json({
        error: 'Essa disciplina não existe',
      });
    }

    const { course_id, name, code } = subject;

    return res.json({ course_id, name, code });
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const subject = await Subject.findByPk(id);

      if (!subject) {
        return res.status(400).json({
          error: 'A disciplina não foi encontrada',
        });
      }

      const { name, code } = await subject.update(req.body);

      return res.json({ id, name, code });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const subject = await Subject.findByPk(id);

    if (!subject) {
      return res.status(400).json({
        errors: 'A disciplina não foi encontrada',
      });
    }

    await subject.destroy();

    return res.status(200).json({ message: 'deleted' });
  }
}

export default new SubjectController();
