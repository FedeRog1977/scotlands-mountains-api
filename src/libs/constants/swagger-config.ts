import swaggerjsdoc from 'swagger-jsdoc';

/**
 * `swaggerjsdoc` is a CommonJS module which only
 * supports default imports in ESModules
 */
type Information = swaggerjsdoc.Information;

export const swaggerConfig: Information = {
  title: "Scotland's Mountains API",
  description: "Scotland's Mountains API Developer Docs",
  version: '0.0.1',
  explorer: true,
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: "Scotland's Mountains API",
      description: "Scotland's Mountains API Developer Docs",
      version: '0.0.1',
      contact: {
        name: 'Lewis Britton',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080/accounts',
        name: 'Accounts',
      },
      {
        url: 'http://localhost:8080/regions',
        name: 'Regions',
      },
    ],
  },
  //   apis: ['./src/api/routes/v1/*.js'],
  apis: ['./src/controllers/*.js'],
  //   apis: ['./src/controllers/accounts.js', './src/controllers/regions.js'],
};
