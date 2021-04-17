var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');


router.get('/moon', function (request, response) {
    response.render("moon");
});
module.exports = router;