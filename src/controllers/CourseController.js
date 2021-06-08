import Department from '../models/Department';
import Course from '../models/Course';

class CourseController {
  async create(req, res) {
    try {
      const { department_id } = req.params;
      const { name } = req.body;

      const department = await Department.findByPk(department_id);

      if (!department) {
        return res.status(400).json({
          errors: 'Esse departamento não existe.',
        });
      }

      await Course.create({ department_id, name });

      return res.status(201).json({ message: 'success' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    const courses = await Course.findAll({ attributes: ['id', 'name'] });

    return res.json(courses);
  }

  async getCoursesByDepartament(req, res) {
    const { department_id } = req.params;

    const department = await Department.findByPk(department_id);

    if (!department) {
      return res.status(400).json({
        errors: 'Esse departamento não existe',
      });
    }

    const courses = await Course.findAll({
      where: {
        department_id,
      },
      attributes: ['id', 'name'],
    });

    return res.json({ department: department.name, courses });
  }

  async getCourseById(req, res) {
    const { id } = req.params;

    const curso = await Course.findByPk(id);

    if (!curso) {
      return res.status(400).json({
        errors: 'Esse curso não existe',
      });
    }

    const { department_id, nome } = curso;

    return res.json({ department_id, id, nome });
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const course = await Course.findByPk(id);

      if (!course) {
        return res.status(400).json({ error: 'Esse curso não foi encontrado' });
      }

      const { name } = await course.update(req.body);

      return res.json({ id, name });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(400).json({ error: 'Esse curso não foi encontrado' });
    }

    await course.destroy();

    return res.status(200).json({ message: 'deleted' });
  }
}

export default new CourseController();
