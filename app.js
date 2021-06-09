require('express-async-errors');

import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import departmentRoutes from './src/routes/departmentRoutes';
import courseRoutes from './src/routes/courseRoutes';
import subjectRoutes from './src/routes/subjectRoutes';
import classRoutes from './src/routes/classRoutes';
import myClassRoutes from './src/routes/myClassRoutes';

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
    this.app.use('/myClasses/', myClassRoutes);
    this.app.use('/', courseRoutes);
    this.app.use('/', subjectRoutes);
    this.app.use('/', classRoutes);

    this.app.use((error, request, response, next) => {
      console.log(error);
      response.sendStatus(500);
    });
  }
}

export default new App().app;
