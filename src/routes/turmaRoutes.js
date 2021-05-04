import { Router } from 'express';
import turmaController from '../controllers/TurmaController';

const router = new Router();

router.get('/turmas/get-all', turmaController.getAll);
router.get('/disciplinas/:disciplina_id/turmas', turmaController.getClassesByDiscipline);
router.get('/turmas/:id', turmaController.getClassById);
router.post('/disciplinas/:disciplina_id/turmas/create', turmaController.create);
router.put('/turmas/update/:id', turmaController.update);
router.delete('/turmas/delete/:id', turmaController.delete);

export default router;
