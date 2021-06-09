import { Router } from 'express';
import MyClassController from '../controllers/MyClassController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/get-all', loginRequired, MyClassController.getAll);
router.get('/:id', loginRequired, MyClassController.getById);
router.put('/:id/add-absence', loginRequired, MyClassController.addAbsences);
router.put('/:id/remove-absence', loginRequired, MyClassController.removeAbsences);
router.put('/:id/add-presence', loginRequired, MyClassController.addPresence);
router.put('/:id/remove-presence', loginRequired, MyClassController.removePresence);

export default router;
