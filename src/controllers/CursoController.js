import Departamento from '../models/Departamento';
import Curso from '../models/Curso';

class CursoController {
  async store(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;

      console.log(req.params);

      const departamento = await Departamento.findByPk(id);

      if (!departamento) {
        return res.status(400).json({
          errors: 'O departamento não existe.',
        });
      }

      const curso = await Curso.create({ nome });

      return res.json({ curso });
    } catch (e) {
      return console.log(e);
      // return res.status(400).json({
      //   errors: e.errors.map((err) => err.message),
      // });
    }
  }
}

export default new CursoController();
