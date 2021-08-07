import { Application } from 'express';
import { Server } from 'http';
import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import Logger from '../lib/logger';

const loader = async (app: Application, server: Server) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('🧨 DB loaded and connected!');

  const userModel = {
    name: 'usersModel',
    model: require('../models/user').default,
  };

  await dependencyInjectorLoader({
    mongoConnection,
    models: [
      userModel,
    ],
  });

  Logger.info('🔥 Dependency Injector loaded');

  await expressLoader({ app });

  Logger.info('🚀 Express loaded');
};

export default loader;
