import express from 'express';

const articleRouter = express.Router();

articleRouter.get('/', (req, res) => {
    res.send('at articles')
});

articleRouter.get('/new', (req, res) => {  
    res.render('articles/new')
 })

export default articleRouter;