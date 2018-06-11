
var orm = require('../config/orm');

var chicken = {
  selectAll: function(cb) {
    orm.selectAll('chickens',function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne('chickens',cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(obj, condition, cb) {
    orm.updateOne('chickens', obj, condition, function(res) {
      cb(res);
    })
  },

  deleteOne: function(condition,cb) {
    orm.deleteOne('chickens', condition, function(res) {
      cb(res);
    });
  }
}

module.exports = chicken;
