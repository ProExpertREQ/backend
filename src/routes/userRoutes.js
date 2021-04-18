import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/get-all', userController.getAll);
router.get('/', loginRequired, userController.getUserById);

router.post('/create', userController.create);
router.post('/login', userController.login);

router.put('/update', loginRequired, userController.update);
router.put('/password-change', loginRequired, userController.changePassword);
router.delete('/delete', loginRequired, userController.delete);

export default router;
