var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');

router.get('/create', function (request, response) {
    response.render("user/create");
});
router.post('/create', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    var photo = request.files.profilePhoto;
    var fileName = photo.name;
    photo.mv('./files/avatars/'+ fileName);

    if(password && username && email) {
        connection.query('INSERT INTO `accounts` (`username`, `password`, `email`, `profilePicture`) VALUES (?,?,?,?)', [username, password, email, fileName],
        function (error, results, fields) {
                if (!error) {
                    
                    response.redirect('/admin');
                }  else {
                    console.log(error);
                }           
            });

        }
    });

module.exports = router;