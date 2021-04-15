import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
const cors = require('cors');
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import departamentoRoutes from './src/routes/departamentoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middleares();
    this.routes();
  }

  middleares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors())
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/departamentos/', departamentoRoutes);
  }
}

export default new App().app;
