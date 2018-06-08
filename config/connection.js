
var mysql = require('mysql2');
var config = require('./connection-config');

var connection = mysql.createConnection(config);

//********** IN CASE I GET THE GREEN LIGHT FOR PROMISES ******************/

//********** CUSTOM PROMISE WRAPPER ******************/
// class Connection {
//   constructor(config) {
//     this.connection = mysql.createConnection(config);
//   }

//   query(str,obj) {
//     return new Promise((resolve,reject) => {
//       this.connection.query(str,obj,(err,res) => {
//         if (err) {
//           throw err;
//           return reject(err);
//         }
//         resolve(res);
//       });
//     });
//   }

//   destroy() {
//     return new Promise((resolve,reject) => {
//       this.connection.destroy((err,res) => {
//         if(err) {
//           return reject(err);
//         }
//         resolve();
//       });
//     });
//   }

// }

// module.exports = new Connection(config);
module.exports = connection;
