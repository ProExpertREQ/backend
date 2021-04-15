import { Router } from 'express';
import cursoController from '../controllers/CursoController';

const router = new Router();

router.get('/get-all', cursoController.getAll);

export default router;
