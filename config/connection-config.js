
// Config to be passed to the instance of MySQL's connection in connections.js
const config = {
  host: process.env.HOST || 'localhost',
  user: 'root',
  password: '',
  database: 'chickens_db'
};

module.exports = config;
