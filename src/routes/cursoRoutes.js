import { Router } from 'express';
import cursoController from '../controllers/CursoController';

const router = new Router();

router.post('/departamentos/:departamento_id/cursos/create', cursoController.create);
router.get('/cursos/get-all', cursoController.getAll);

export default router;
