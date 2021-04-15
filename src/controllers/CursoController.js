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

      return res.json(curso);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CursoController();
