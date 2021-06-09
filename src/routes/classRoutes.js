import { Router } from 'express';
import ClassController from '../controllers/ClassController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/classes/get-all', loginRequired, ClassController.getAll);
router.get('/subjects/:subject_id/classes', ClassController.getClassesBySubject);
router.get('/classes/:id', loginRequired, ClassController.getClassById);
router.post('/subjects/:subject_id/classes/create', loginRequired, ClassController.create);
router.put('/classes/update/:id', loginRequired, ClassController.update);
router.delete('/classes/delete/:id', loginRequired, ClassController.delete);

router.post('/classes/:id/register', loginRequired, ClassController.register);

export default router;
