import { Router } from 'express';
import cursoController from '../controllers/CursoController';

const router = new Router();

router.post('/departments/:departamento_id/cursos/create', cursoController.create);
router.get('/courses/get-all', cursoController.getAll);
router.get('/courses/:id', cursoController.getCourseById);
router.put('/courses/:id/update', cursoController.update);
router.delete('/courses/:id/delete', cursoController.delete);
router.get('/departments/:departamento_id/courses', cursoController.getCoursesByDepartament);

export default router;
