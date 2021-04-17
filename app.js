var session = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv');
var ejs = require('ejs');
var fileUpload = require('express-fileUpload');

var login = require('./routes/login');
var registerPage = require('./routes/register');
var admin = require('./routes/admin');
var game = require('./routes/game');
var goblin = require('./routes/goblin');
var home = require('./routes/home');
var moon = require('./routes/moon');
var Poster = require('./routes/poster');
var vik = require('./routes/vik');
var editUser = require('./routes/edit-user');
var deleteUser = require('./routes/delete-user');
var create = require('./routes/create');
var addPost = require('./routes/addPost');
var post1 = require('./routes/post1');
var deletePost = require('./routes/delete-post');
var editPost = require('./routes/edit-post');

dotenv.config();

var app = express();
app.use(express.static(__dirname + '/files'));

app.use(fileUpload(__dirname+ '/files'));

app.set("views", path.join(__dirname + '/view'));
app.set('view engine', 'ejs');


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', login);
app.use('/', registerPage);
app.use('/', admin);
app.use('/', game);
app.use('/', goblin);
app.use('/', home);
app.use('/', moon);
app.use('/', Poster);
app.use('/', vik);
app.use('/', editUser);
app.use('/', deleteUser);
app.use('/', create);
app.use('/', addPost);
app.use('/', post1);
app.use('/', deletePost);
app.use('/', editPost);



app.get('/logout', function (request, response) {
    request.session.loggedin = false;
    request.session.username = null;
    response.redirect('/login');
});


app.listen(process.env.SERVER_PORT, () => console.log(`Server start ${process.env.SERVER_PORT} `));
