var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');

router.get('/game', function (request, response) {
    response.render("game");
});

module.exports = router;