import mongoose from 'mongoose';
import config from '../config';
import logger from '../lib/logger';

const loadMongoose = async () => {
  const connection = await mongoose.connect(config.databaseURL, {
    useCreateIndex: true,
    // useUnifiedTopology: true,
    // useUnifiedTopology: true,
    useFindAndModify: false,
  })

  logger.info(`🛸️ Connected to MongoDB`)

  return connection
}

export default loadMongoose;

