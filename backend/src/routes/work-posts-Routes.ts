import { Router } from 'express';
import { getWork, getWorks } from '../controllers/blog-posts-controller';


const router = Router();


router.get('/',getWorks)
router.get('/:id',getWork)





export default router;