import express from 'express';
import pino from 'pino'
import dotenv from 'dotenv'
import middleware from './middlewares/index.middleware.js';

 export const app = express();
 export const logger = pino();
 dotenv.config();


 app.set('view engine', 'ejs');

middleware(app);


const PORT = process.env.PORT ||  5111;
app.listen(PORT, function () {
    logger.info(`listening on port ${PORT}`);
});

export default { app, logger};