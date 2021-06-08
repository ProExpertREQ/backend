import { Router } from 'express';
import departmentController from '../controllers/DepartmentController';

const router = new Router();

router.get('/get-all', departmentController.getAll);
router.get('/:id', departmentController.getDepartamentById);
router.post('/create', departmentController.create);
router.put('/update/:id', departmentController.update);
router.delete('/delete/:id', departmentController.delete);

export default router;
