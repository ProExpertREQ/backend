import { Router } from 'express';
import disciplinasCursadasController from '../controllers/DisciplinasCursadasController';

const router = new Router();

router.get('/', disciplinasCursadasController.index);

export default router;
