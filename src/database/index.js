import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

class Database {
  constructor({ env }) {
    this.env = env;
    this.models = [];
    this.init();
  }

  init() {
    const config = databaseConfig[this.env];
    this.connection = new Sequelize({
      ...config,
    });

    this.models.forEach(model => model.init(this.connection));

    this.models.forEach(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database({
  env: process.env.NODE_ENV,
});
