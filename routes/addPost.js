var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');

router.get('/addPost', function (request, response) {
    response.render("post/addPost");
});
router.post('/addPost', function (request, response) {
    var file = request.body.file;
    var title = request.body.title;
    var about = request.body.about;
    var date = request.body.date;
    var photo = request.files.picture;
    var fileName = photo.name;
    photo.mv('./files/photos/'+ fileName);


        connection.query('INSERT INTO `post` (file, title, about, date,picture) VALUES (?,?,?,?,?)', [file, title, about, date, fileName],
        function (error, results, fields) {
                if (!error) {
                    response.redirect('/post1');
                }  else {
                    console.log(error);
                }           
            });
        
    });

module.exports = router;