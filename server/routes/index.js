var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.post('/', passport.authenticate('local'), function(req, res) {
  res.sendStatus(200);
});

// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  console.log("request for index");
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
