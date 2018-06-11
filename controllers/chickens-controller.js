
var express = require('express');
// The model needs to be imported here. The model interfaces with db
// utilizing information handled by the controller.
var chicken = require('../models/chicken');

// Set up router
var router = express.Router();

//  Routes
router.get('/', function (req, res) {
  chicken.selectAll(function (data) {
    // data.push('test!!');
    var hbbsObject = {
      chickens: data
    };
    console.log(hbbsObject);
    res.render("index", hbbsObject);
  });
});

router.post('/api/chickens/', function (req, res) {
  chicken.insertOne(['chicken_name', 'devoured','img'], [req.body.chicken_name, req.body.devoured,req.body.img], function (result) {
    res.json({ id: result.insertId });
  });
})

router.put('/api/chickens/:id', function (req, res) {
  var condition = "id = " + req.params.id;
  chicken.updateOne({ devoured: req.body.devoured }, condition, function (result) {
    console.log(res);
    // check if existed
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });

});

router.delete('/api/chickens/:id', function (req, res) {
  var condition = "id = " + req.params.id;

  chicken.deleteOne(condition, function (result) {
    // ditto 
    if (result) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  });

});

module.exports = router;