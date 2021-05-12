import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Departamento from '../models/Departamento';
import Curso from '../models/Curso';
import Disciplina from '../models/Disciplina';
import Turma from '../models/Turma';
import DisciplinasCursadas from '../models/DisciplinasCursadas';

const models = [User, Departamento, Curso, Disciplina, Turma, DisciplinasCursadas];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
