// index.js

const express = require('express');
var path = require("path");
var mysql = require('mysql');
const app = express();
var bodyParser = require('body-parser');
var fs = require("fs");


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.query('USE reactShop');
app.set('port', 4246);
//-------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//------
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));


app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return next();
});


function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

eval(fs.readFileSync('products.js')+'');
eval(fs.readFileSync('users.js')+'');


app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));