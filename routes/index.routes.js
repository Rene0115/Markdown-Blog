import express from 'express';
import articleRouter from './articles.routes.js';
const router = express.Router();



router.get('/', (req, res) => {
     res.render('index', { articles: articles })
    })
router.use('/articles', articleRouter)


export default router;