import { Router } from 'express';
import disciplinaController from '../controllers/DisciplinaController';

const router = new Router();

// router.get('/get-all', departamentoController.getAll);
// router.get('/:id', departamentoController.getDepartamentById);
router.post('/:curso_id/create', disciplinaController.create);
// router.put('/update/:id', departamentoController.update);
// router.delete('/delete/:id', departamentoController.delete);

export default router;
