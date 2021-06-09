import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Department from '../models/Department';
import Course from '../models/Course';
import Subject from '../models/Subject';
import Class from '../models/Class';
import MyClass from '../models/MyClass';

const models = [User, Department, Course, Subject, Class, MyClass];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
