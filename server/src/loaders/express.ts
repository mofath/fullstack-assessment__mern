import express, { Application } from 'express';
import {
  ErrorHandlerMiddleware,
  NotFoundErrorMiddleWare,
  CORSMiddleware,
} from '../api/middlewares';

type Props = { app: Application };
const expressLoader = async ({ app }: Props) => {
  app.use(express.json());

  app.use(CORSMiddleware);

  /// error handlers
  app.use(NotFoundErrorMiddleWare);

  app.use(ErrorHandlerMiddleware);
};

export default expressLoader;
