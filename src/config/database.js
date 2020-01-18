module.exports = {
  local: {
    url: process.env.LOCAL_DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  development: {
    url: process.env.DEVELOPMENT_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.PRODUCTION_DATABASE_URL,
    dialect: 'postgres',
  },
};
