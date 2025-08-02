require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

// TODO: implement MongoDB database
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// mongoose.connection.on('error', (error) => console.error(error));
// mongoose.connection.once('open', () => console.log('Connected to Database'));

const accountsRouter = require('./controllers/accounts.js');
const regionsRouter = require('./controllers/regions.js');
app.use('/accounts', accountsRouter);
app.use('/regions', regionsRouter);

app.listen(8080, () => console.log('Server Started'));
