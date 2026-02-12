/* eslint-disable no-console new-cap */

import express from 'express';
import swaggerjsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import regionsRouter from './controllers/regions';
import { serverConfig } from './libs/constants/server-config';
import { swaggerConfig } from './libs/constants/swagger-config';
import { cors } from './libs/utils/cors';

const application = express();

export const Server = (): void => {
  console.log('Initializing API ...');
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());

  console.log('Initializing additional HTTP configuration ...');
  application.use(cors);

  console.log('Checking API Health ...');
  application.get('/health', (_request, response, _next) =>
    response.status(200).json({ status: 'alive' }),
  );

  console.log('Starting Server ...');
  application.listen(serverConfig.port, () => {
    console.log(`Server started on ${serverConfig.hostname}:${serverConfig.port}.`);
  });

  application.use('/regions', regionsRouter);
  application.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerjsdoc(swaggerConfig)));
};

Server();
