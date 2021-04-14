import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/get-all', userController.index);
router.get('/:id', loginRequired, userController.show);

router.post('/create', userController.store);

router.put('/update', loginRequired, userController.update);
router.delete('/delete', loginRequired, userController.delete);

export default router;
