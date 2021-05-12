import Sequelize, { Model } from 'sequelize';
import databaseConfig from '../config/database';

const connection = new Sequelize(databaseConfig);
export default class BaseModel extends Model {  
  static init(sequelize) {
    return this;
  }

  static async insertCustom(query , Vars){
 
    try {
      // const result = connection.query("SELECT NOW()")
      const rows = await connection.query('SELECT * FROM departamentos')
      .then(rows => {
       console.log(rows); //[ { 'NOW()': 2018-07-02T17:06:38.000Z }, meta: [ ... ] ]
      })
      .catch(err => {
       //handle error
       console.log(err) 
      
      });
    }
    catch (e){console.log(e)}
  }
  static updateCustom(){

  }

  static deleteCustom(){

  }

  static runCustom(){

  }
}
