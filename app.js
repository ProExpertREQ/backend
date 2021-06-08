import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import departmentRoutes from './src/routes/departmentRoutes';
import courseRoutes from './src/routes/courseRoutes';
import subjectRoutes from './src/routes/subjectRoutes';

import turmaRoutes from './src/routes/turmaRoutes';
import disciplinasCursadasRoutes from './src/routes/disciplinasCursadasRoutes';

const cors = require('cors');

class App {
  constructor() {
    this.app = express();
    this.middleares();
    this.routes();
  }

  middleares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/departments/', departmentRoutes);
    this.app.use('/disciplinas-cursadas/', disciplinasCursadasRoutes);
    this.app.use('/', courseRoutes);
    this.app.use('/', subjectRoutes);
    this.app.use('/', turmaRoutes);
  }
}

export default new App().app;
