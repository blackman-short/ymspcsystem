var express = require('express');
var router = express.Router();
const users = require('./users')

/* GET home page. */
router.get('/user', users);

module.exports = router;
