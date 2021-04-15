import { Router } from 'express';
import departamentoController from '../controllers/DepartamentoController';
import cursoController from '../controllers/CursoController';

const router = new Router();

router.get('/get-all', departamentoController.getAll);
router.get('/:id', departamentoController.getDepartamentById);
router.post('/create', departamentoController.create);
router.put('/update/:id', departamentoController.update);
router.delete('/delete/:id', departamentoController.delete);

router.post('/:_departamento_id/cursos/create', cursoController.create);

export default router;
