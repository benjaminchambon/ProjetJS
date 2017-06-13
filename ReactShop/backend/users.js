/**
 * Created by Benjamin on 26/05/2017.
 */

var formidable = require('formidable');

//GET USER
app.get('/user/', function (req, res) {
    var pseudo = req.query.pseudo;
    var password = req.query.password;
    console.log('pseudo='+pseudo);
    var query = "SELECT * FROM users where pseudo = ? AND password = ?";
    var table = [pseudo, password];
    query = mysql.format(query, table);
    connection.query(query, function (err, rows) {
        if (err) {
            res.status(500);
            res.json({"Error": true, "Message": "Error executing MySQL query"});
        } else {
            if (isEmptyObject(rows)) {
                res.json({"Error": true, "Message": "User does not exist"});
            } else {
                res.json(rows);
            }

        }
    });
});


//INSERT USER
app.post('/userInsert/', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var user = fields.user;
        var pass = fields.pass;
        var email = fields.email;

        var query = "INSERT INTO `users`(`id`, `pseudo`, `password`,`isAdmin`, `address`, `email`) VALUES (DEFAULT,?,?,?,?,?)";
        var table = [user, pass, 1,'3parcGarnier',email];
        query = mysql.format(query, table);
        connection.query(query, function (err) {
            if (err) {
                res.json({"Error": true, "Message": "Error executing MySQL query", "err": err});
            } else {
                res.json({"Error": false, "Message": "Success"});
            }
        });
    });
});


//UPDATE USER
app.post('/updateUser/', function (req, res) {
    var pseudo = req.body.pseudo;
    var password = req.body.password;
    var address = req.body.address;
    var email = req.body.email;
    var query = "UPDATE users SET pseudo = ?, password = ?, isAdmin = ?, address = ?, email = ? WHERE pseudo = ?";
    var table = [pseudo, password,false, address, email, pseudo];
    query = mysql.format(query, table);
    connection.query(query, function (err, rows) {
        if (err) {
            res.status(500);
            res.json({"Error": true, "Message": "Error executing MySQL query"});
        } else {
            if (isEmptyObject(rows)) {
                res.json({"Error": true, "Message": "User does not exist"});
            } else {
                res.json({"Error": false, "Message": "Success", "Users": rows});
            }

        }
    });
});

