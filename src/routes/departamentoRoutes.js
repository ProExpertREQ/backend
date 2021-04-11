import { Router } from 'express';
import departamentoController from '../controllers/DepartamentoController';

const router = new Router();

router.get('/', departamentoController.index);
router.get('/:id', departamentoController.show);

router.post('/', departamentoController.store);
router.put('/:id', departamentoController.update);
router.delete('/:id', departamentoController.delete);

export default router;
