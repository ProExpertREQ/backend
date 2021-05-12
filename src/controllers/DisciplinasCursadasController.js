import Disciplina from '../models/Disciplina';
import User from '../models/User';

class DisciplinasCursadasController {
  index(req, res) {
    return res.json('Index');
  }
}

export default new DisciplinasCursadasController();
