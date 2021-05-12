import { Router } from 'express';
import disciplinasCursadasController from '../controllers/DisciplinasCursadasController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/get-all', loginRequired, disciplinasCursadasController.getAll);
router.get('/:id', loginRequired, disciplinasCursadasController.getById);

router.put('/:id/add-absences', loginRequired, disciplinasCursadasController.addAbsences);
router.put('/:id/remove-absences', loginRequired, disciplinasCursadasController.removeAbsences);

router.put('/:id/add-presence', loginRequired, disciplinasCursadasController.addPresence);
router.put('/:id/remove-presence', loginRequired, disciplinasCursadasController.removePresence);

export default router;
