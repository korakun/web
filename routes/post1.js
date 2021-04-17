var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');


router.get('/post1', function (request, response) {
	if (request.session.loggedin == true) {
		connection.query('SELECT * FROM post', function (error, results, field) {
			console.log(results);
			response.render('post1', { users: results });
		});
	} else {
		response.render("login", { error: "please login" });
	}
});

module.exports = router;