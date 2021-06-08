import { Router } from 'express';
import CourseController from '../controllers/CourseController';

const router = new Router();

router.post('/departments/:department_id/courses/create', CourseController.create);
router.get('/courses/get-all', CourseController.getAll);
router.get('/courses/:id', CourseController.getCourseById);
router.put('/courses/update/:id', CourseController.update);
router.delete('/courses/delete/:id', CourseController.delete);
router.get('/departments/:department_id/courses', CourseController.getCoursesByDepartament);

export default router;
