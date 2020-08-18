require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'database',
  operatorAliases: false,
  define: {
    // timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
