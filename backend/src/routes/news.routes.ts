import { Router } from 'express';

import { getNews, getNewsDetail, manualPostRefresh,getSchedulerStatus } from '../controllers/news.controller';



const router = Router();

router.get('/fetch-and-save',manualPostRefresh)
router.get('/:id',getNewsDetail)
router.get('/',getNews)
router.get('/scheduler-status', getSchedulerStatus);

export default router;