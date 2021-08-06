import { Container } from 'typedi';
import { connect } from 'mongoose';
import { ThenArg } from '../types';
import LoggerInstance from './../lib/logger';

type Props = {
  mongoConnection: ThenArg<ReturnType<typeof connect>>,
  models: { name: string; model: any }[]
};
const dependencyInjectorLoader = async ({ mongoConnection, models }: Props) => {
  try {
    models.forEach((m) => {
      Container.set(m.name, m.model);
    });

    Container.set('mongoConnection', mongoConnection);
    Container.set('logger', LoggerInstance);
  } catch (error) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', error);
    throw error;
  }
};

export default dependencyInjectorLoader;
