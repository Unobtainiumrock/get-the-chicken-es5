
// Config to be passed to the instance of MySQL's connection in connections.js
const config = {
  host: process.env.JAWSDB_URL || 'localhost',
  user: 'root',
  password: '',
  database: 'chickens_db'
};

var blah;

module.exports = config;
