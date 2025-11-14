import { Router } from 'express';

import { getNews, getNewsDetail, manualPostRefresh,getSchedulerStatus } from '../controllers/news.controller';



const router = Router();

router.get('/fetch-and-save',manualPostRefresh)

router.get('/',getNews)
router.get('/scheduler-status', getSchedulerStatus);
router.get('/:id',getNewsDetail)
export default router;