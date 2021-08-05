import config from './config';
import express from 'express';
import http from 'http';
import Logger from './lib/logger';
import loader from './loaders';
import 'reflect-metadata';

async function startServer() {
  const app = express();

  const server = http.createServer(app);

  await loader(app, server);

  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on('error', (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
