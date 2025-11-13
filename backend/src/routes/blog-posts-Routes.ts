import { Router } from 'express';
import { getBlogPost, getBlogPosts} from '../controllers/blog-posts-controller';

// import {
//   createItem,
//   getItems,
//   getItemById,
//   updateItem,
//   deleteItem,
// } from '../controllers/itemController';

const router = Router();

router.get('/', getBlogPosts);

router.get('/:id', getBlogPost);




export default router;