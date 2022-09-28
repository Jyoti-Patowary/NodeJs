var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('Hello Express. This is Express');
});


module.exports = router;

