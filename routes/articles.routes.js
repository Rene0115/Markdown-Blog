import express from 'express';

const articleRouter = express.Router();

articleRouter.get('/new', (req, res) => {  
    res.render('new')
 })

 articleRouter.post('/', (req, res))

export default articleRouter;