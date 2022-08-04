import express from 'express';
import articleRouter from './articles.routes.js';
const router = express.Router();



router.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
   {
    title: 'Test Article 2',
        createdAt: new Date (),
        description: 'Test description 2'
   }]
     res.render('index', /*pass all articles to index */{ articles: articles })
    })
router.use('/articles', articleRouter)


export default router;