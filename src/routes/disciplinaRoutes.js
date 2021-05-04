import { Router } from 'express';
import disciplinaController from '../controllers/DisciplinaController';

const router = new Router();

router.get('/cursos/:curso_id/disciplinas', disciplinaController.getDisciplinesByCourse);
router.post('/cursos/:curso_id/disciplinas/create', disciplinaController.create);
router.get('/disciplinas/get-all', disciplinaController.getAll);
router.get('/disciplinas/:id', disciplinaController.getDisciplineById);
router.put('/disciplinas/update/:id', disciplinaController.update);
router.delete('/disciplinas/delete/:id', disciplinaController.delete);

export default router;
