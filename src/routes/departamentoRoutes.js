import { Router } from 'express';
import departamentoController from '../controllers/DepartamentoController';
import cursoController from '../controllers/CursoController';

const router = new Router();

router.get('/', departamentoController.index);
router.get('/:id', departamentoController.show);

router.post('/', departamentoController.store);

router.post('/:id/cursos', cursoController.store);

router.put('/:id', departamentoController.update);
router.delete('/:id', departamentoController.delete);

export default router;
