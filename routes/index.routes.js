import express from 'express';
import { app } from '../app.js';

const router = express.Router();


router.get('/', (req, res) => {
     res.render('index')
    })


export default router;