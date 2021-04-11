import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Departamento from '../models/Departamento';

const models = [User, Departamento];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
