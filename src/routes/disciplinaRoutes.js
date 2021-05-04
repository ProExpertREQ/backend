import { Router } from 'express';
import disciplinaController from '../controllers/DisciplinaController';

const router = new Router();

router.get('/get-all', disciplinaController.getAll);
// router.get('/:curso_id', disciplinaController.getDisciplinesByCourse);
router.get('/:id', disciplinaController.getDisciplineById);
router.post('/:curso_id/create', disciplinaController.create);
// router.put('/update/:id',);
// router.delete('/delete/:id',);

export default router;
