import express from 'express';
import articleRouter from './articles.routes.js';
const router = express.Router();



router.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description:
    }]
     res.render('index', /*pass all articles to index */{ articles: articles })
    })
router.use('/articles', articleRouter)


export default router;