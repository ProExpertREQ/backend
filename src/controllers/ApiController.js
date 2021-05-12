import Departamento from '../models/Departamento';
import BaseModel from '../models/BaseModel';

class ApiController {

  async status(req, res) {

    console.log(req.body)
    return res.json(200);
  }



  async departments(req, res) {
    var data = req.body
    var departmentsList = data['departments']

    for (var i in departmentsList) {
      try {
        const novoDepartamento = await Departamento.create({id:departmentsList[i]['id'] ,nome: departmentsList[i]['name'], codigo:departmentsList[i]['id'] });
        const { id, nome, code } = novoDepartamento;

      } catch (e) {
        console.log(e)
        res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
        continue
      }
    }
    // return res.status(200).json('departments updated');
    return res.status(200).json({
      // errors: e.errors.map((err) => err.message),
    });
  }

  async subjects(req, res) {

    console.log(req.body)
    return res.json(200);
  }

  async courses(req, res) {

    console.log('bundinha')
    return res.json(200);


    try {
      const { departamento_id } = req.params;
      const { nome } = req.body;

      const departamento = await Curso.findByPk(departamento_id);

      if (departamento) {
        update({ id, nome })
      }

      const curso = await Curso.create({ departamento_id, nome });

      const dados = { departamento: departamento.nome, curso_id: curso.id, nome: curso.nome };

      return res.json(dados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async courses(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['O ID do curso não foi encontrado.'],
        });
      }

      const curso = await Curso.findByPk(req.params.id);

      if (!curso) {
        return res.status(400).json({
          errors: ['O curso procurado não existe.'],
        });
      }

      const { id, nome } = await curso.update(req.body);

      return res.json({ id, nome });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }



  // async create(req, res) {
  //     console.log(req.body)
  //     return
  //   try {
  //     const { departamento_id } = req.params;
  //     const { nome } = req.body;

  //     const departamento = await Departamento.findByPk(departamento_id);

  //     if (!departamento) {
  //       return res.status(400).json({
  //         errors: 'O departamento não existe.',
  //       });
  //     }

  //     const curso = await Curso.create({ departamento_id, nome });

  //     const dados = { departamento: departamento.nome, curso_id: curso.id, nome: curso.nome };

  //     return res.json(dados);
  //   } catch (e) {
  //     return res.status(400).json({
  //       errors: e.errors.map((err) => err.message),
  //     });
  //   }
  // }

  // async update(req, res) {
  //   try {
  //     if (!req.params.id) {
  //       return res.status(400).json({
  //         errors: ['O ID do curso não foi encontrado.'],
  //       });
  //     }

  //     const curso = await Curso.findByPk(req.params.id);

  //     if (!curso) {
  //       return res.status(400).json({
  //         errors: ['O curso procurado não existe.'],
  //       });
  //     }

  //     const { id, nome } = await curso.update(req.body);

  //     return res.json({ id, nome });
  //   } catch (e) {
  //     return res.status(400).json({
  //       errors: e.errors.map((err) => err.message),
  //     });
  //   }
  // }
}

export default new ApiController();
