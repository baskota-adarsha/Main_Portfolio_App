import { Router } from 'express';

import { getNews, getNewsDetail, manualPostRefresh } from '../controllers/news.controller';



const router = Router();

router.get('/fetch-and-save',manualPostRefresh)
router.get('/:id',getNewsDetail)
router.get('/',getNews)


export default router;