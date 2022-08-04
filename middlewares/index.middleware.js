/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import morgan from 'morgan';
import database from '../config/mongoose.config.js';
import router from '../routes/index.routes.js';
import errorMiddleware from './error.middleware.js';

const middleware = (app) => {
  app.use(router);
  app.use(errorMiddleware);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan());
  database();
};

export default middleware;
