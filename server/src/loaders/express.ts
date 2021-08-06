import express, { Application } from 'express';
import api from '../api/routes';
import {
  ErrorHandlerMiddleware,
  NotFoundErrorMiddleWare,
  CORSMiddleware,
} from '../api/middlewares';

type Props = { app: Application };
const expressLoader = async ({ app }: Props) => {

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(CORSMiddleware);

  app.use(api);

  /// error handlers
  app.use(NotFoundErrorMiddleWare);

  app.use(ErrorHandlerMiddleware);
};

export default expressLoader;
