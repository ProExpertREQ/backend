import Department from '../models/Department';

class DepartmentController {
  async create(req, res) {
    try {
      const { name, code } = req.body;

      console.log('coisas', name, code);

      await Department.create({ name, code });

      return res.status(201).json({ message: 'success' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    const departments = await Department.findAll(
      { attributes: ['id', 'name', 'code'] },
    );

    if (departments.length === 0) {
      return res.json('Não existem departamentos cadastrados');
    }

    return res.status(200).json(departments);
  }

  async getDepartamentById(req, res) {
    const { id } = req.params;

    const department = await Department.findByPk(id, {
      attributes: [
        'id',
        'name',
        'code',
      ],
    });

    if (!department) {
      return res.status(400).json({
        errors: ['O departamento não existe'],
      });
    }

    return res.status(200).json(department);
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const departmentExists = await Department.findByPk(id);

      if (!departmentExists) {
        return res.status(400).json({
          errors: ['O departamento não existe'],
        });
      }

      const data = await departmentExists.update(req.body);

      const department = {
        id: data.id,
        name: data.name,
        code: data.code,
      };

      return res.status(200).json({ department, message: 'updated' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const department = await Department.findByPk(id);

    if (!department) {
      return res.status(400).json({
        error: 'Esse departamento não existe',
      });
    }

    await department.destroy();

    return res.status(200).json({ message: 'deleted' });
  }
}

export default new DepartmentController();
