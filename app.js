import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import departamentoRoutes from './src/routes/departamentoRoutes';
import cursoRoutes from './src/routes/cursoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middleares();
    this.routes();
  }

  middleares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/departamentos/', departamentoRoutes);
    this.app.use('/cursos/', cursoRoutes);
  }
}

export default new App().app;
