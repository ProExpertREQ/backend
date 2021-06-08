import { Router } from 'express';
import SubjectController from '../controllers/SubjectController';

const router = new Router();

router.get('/courses/:course_id/subjects', SubjectController.getDisciplinesByCourse);
router.post('/courses/:course_id/subjects/create', SubjectController.create);
router.get('/subjects/get-all', SubjectController.getAll);
router.get('/subjects/:id', SubjectController.getDisciplineById);
router.put('/subjects/update/:id', SubjectController.update);
router.delete('/subjects/delete/:id', SubjectController.delete);

export default router;
