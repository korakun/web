var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');

router.get('/editPost/:id', function(request, response) {
    var id = request.params.id;
    connection.query('SELECT * FROM post WHERE post_id = ?', [id], function (error, results, fields) {
        if (!error) {
            response.render("post/edit", {user: results[0]});
        }  else {
            console.log(error);

        }            
    })
});
router.post('/editPost/:id', function(request, response) {
    var name = request.body.name;
    var title = request.body.title;
    var about = request.body.about;
    var photo = request.files.picture;
    var fileName = photo.name;
    var date = request.body.date;
  
    var id = request.params.id;
    photo.mv('./files/photos/' + fileName);
    
     connection.query('UPDATE post SET file =?, title =?, about =?, picture =?,  date =?WHERE post_id = ?', [name, title, about, date,fileName, id ],function (error, results, fields) {
                if (!error) {
                    response.redirect('/post1');
                }  else {
                    console.log(error);
                }           
            })
        });

        
module.exports = router;