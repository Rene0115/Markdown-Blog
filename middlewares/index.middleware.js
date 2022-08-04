/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import router from '../routes/index.routes.js';
import errorMiddleware from './error.middleware.js';

const middleware = (app) => {
  app.use(router);
  app.use(errorMiddleware);
};

export default middleware;
