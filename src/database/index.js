import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Departamento from '../models/Departamento';
import Curso from '../models/Curso';
import Disciplina from '../models/Disciplina';
import Turma from '../models/Turma';

const models = [User, Departamento, Curso, Disciplina, Turma];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

Curso.associate(connection.models);
Disciplina.associate(connection.models);
Turma.associate(connection.models);
