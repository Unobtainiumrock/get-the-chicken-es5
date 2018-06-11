
// var mysql = require('mysql');
// var config = require('./connection-config');


// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   var connection = mysql.createConnection(config);
// }



// //********** IN CASE I GET THE GREEN LIGHT FOR PROMISES ******************/

// //********** CUSTOM PROMISE WRAPPER ******************/
// // class Connection {
// //   constructor(config) {
// //     this.connection = mysql.createConnection(config);
// //   }

// //   query(str,obj) {
// //     return new Promise((resolve,reject) => {
// //       this.connection.query(str,obj,(err,res) => {
// //         if (err) {
// //           throw err;
// //           return reject(err);
// //         }
// //         resolve(res);
// //       });
// //     });
// //   }

// //   destroy() {
// //     return new Promise((resolve,reject) => {
// //       this.connection.destroy((err,res) => {
// //         if(err) {
// //           return reject(err);
// //         }
// //         resolve();
// //       });
// //     });
// //   }

// // }

// // module.exports = new Connection(config);

var mysql = require('mysql');
var connection;
var JAWSDB_URL = "mysql://r64k0qq5l871t1c4:t4lvasrez89f0c9w@qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nm8ychixahn6dspd";



if ( process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "chickens_db"
      });
}
module.exports = connection;