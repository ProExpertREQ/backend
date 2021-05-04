import { Router } from 'express';
import disciplinaController from '../controllers/DisciplinaController';

const router = new Router();

router.get('/disciplinas/get-all', disciplinaController.getAll);
router.get('/cursos/:curso_id/disciplinas', disciplinaController.getDisciplinesByCourse);
router.get('/disciplinas/:id', disciplinaController.getDisciplineById);
router.post('/disciplinas/:curso_id/create', disciplinaController.create);
router.put('/disciplinas/update/:id', disciplinaController.update);
router.delete('/disciplinas/delete/:id', disciplinaController.delete);

export default router;
