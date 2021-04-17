var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');

router.get('/deletePost/:id', function(request, response) {
    var id = request.params.id;
    connection.query('DELETE FROM post WHERE post_id = ?', [id], function (error, results, fields) {
        if (!error) {
            response.redirect("/post1");
        }  else {
            console.log(error);
        }            
    })
});


module.exports = router;