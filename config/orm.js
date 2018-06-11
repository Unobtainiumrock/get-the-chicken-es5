
var connection = require('./connection');
var helpers = require('./orm-helpers');

var orm = {
  selectAll: function(table,cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString,function(err, res) {
      if(err) throw err;
      cb(res);
    })
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += helpers.printQuestionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function(err,res) {
      if(err) throw err;
      cb(res);
    });
  },

  updateOne: function(table, obj, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += helpers.objToSql(obj);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },

  deleteOne: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;

    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString,'*****');
    connection.query(queryString, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  }

}


module.exports = orm;