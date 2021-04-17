var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');


router.get('/vik', function (request, response) {
    response.render("vik");
});

module.exports = router;
