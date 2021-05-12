import { Router } from 'express';
import ApiController from '../controllers/ApiController';

const router = new Router();

router.get('/departments', ApiController.departments);
router.get('/courses', ApiController.courses);
router.get('/status', ApiController.status);


export default router;
