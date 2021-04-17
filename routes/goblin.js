var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');


router.get('/goblin', function (request, response) {
    response.render("goblin");
});
module.exports = router;