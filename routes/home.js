var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');

router.get('/', function (request, response) {
    response.render("home");
});

module.exports = router;