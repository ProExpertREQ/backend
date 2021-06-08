import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Department from '../models/Department';
import Curso from '../models/Curso';
import Disciplina from '../models/Disciplina';
import Turma from '../models/Turma';
import DisciplinasCursadas from '../models/DisciplinasCursadas';

const models = [User, Department, Curso, Disciplina, Turma, DisciplinasCursadas];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
