import express from 'express';

const articleRouter = express.Router();

articleRouter.get('/', (req, res) => {
    res.send('at articles')
})
export default articleRouter;