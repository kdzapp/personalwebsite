var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cover');
});

router.get('*', function(req, res) {
  res.render('index');
});


module.exports = router;
