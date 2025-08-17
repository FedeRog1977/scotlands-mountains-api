require('dotenv').config();
const express = require('express');
const swaggerjsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// const swaggerConfig = require('./libs/constants/swagger-config.js');

const swaggerConfig = {
  explorer: true,
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: "Scotland's Mountains API",
      description: "Scotland's Mountains API Developer Docs",
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

const app = express();
app.use(express.json());

// TODO: implement MongoDB database
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// mongoose.connection.on('error', (error) => console.error(error));
// mongoose.connection.once('open', () => console.log('Connected to Database'));

const accountsRouter = require('./src/controllers/accounts.js');
const regionsRouter = require('./src/controllers/regions.js');
app.use('/accounts', accountsRouter);
app.use('/regions', regionsRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerjsdoc(swaggerConfig)));

app.listen(8080, () => console.log('Server Started'));
