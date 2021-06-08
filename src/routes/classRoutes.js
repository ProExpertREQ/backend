import { Router } from 'express';
import turmaController from '../controllers/TurmaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/turmas/get-all', loginRequired, turmaController.getAll);
router.get('/disciplinas/:disciplina_id/turmas', turmaController.getClassesByDiscipline);
router.get('/turmas/:id', loginRequired, turmaController.getClassById);
router.post('/disciplinas/:disciplina_id/turmas/create', loginRequired, turmaController.create);
router.put('/turmas/update/:id', loginRequired, turmaController.update);
router.delete('/turmas/delete/:id', loginRequired, turmaController.delete);

router.post('/turmas/:id/register', loginRequired, turmaController.register);

export default router;
