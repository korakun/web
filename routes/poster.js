var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');


router.get('/Poster', function (request, response) {
    response.render("Poster");
});

module.exports = router;