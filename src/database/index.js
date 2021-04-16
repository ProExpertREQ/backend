import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Departamento from '../models/Departamento';
import Curso from '../models/Curso';

const models = [User, Departamento, Curso];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

Curso.associate(connection.models);
