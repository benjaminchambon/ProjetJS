/**
 * Created by Benjamin on 26/05/2017.
 */

//GET ALL PRODUCTS
app.get('/allproduct/', function (req, res) {
    var query = "SELECT * FROM products";
    query = mysql.format(query);
    connection.query(query, function (err, rows) {
        if (err) {
            res.status(500);
            res.json({"Error": true, "Message": "Error executing MySQL query"});
        } else {
            if (isEmptyObject(rows)) {
                res.json({"Error": true, "Message": "No product found"});
            } else {
                res.json(rows);
            }

        }
    });
});

//GET PRODUCT BY TITLE
app.get('/product/', function (req, res) {
    var title = req.query.title;
    var query = "SELECT * FROM products where title = ?";
    var table = [title];
    query = mysql.format(query, table);
    connection.query(query, function (err, rows) {
        if (err) {
            res.status(500);
            res.json({"Error": true, "Message": "Error executing MySQL query"});
        } else {
            if (isEmptyObject(rows)) {
                res.json({"Error": true, "Message": "No product found"});
            } else {
                res.json({"Error": false, "Message": "Success", "Products": rows});
            }

        }
    });
});
//insert in HISTORY
app.get('/insertProduct/', function (req, res) {
    console.log('totoinsert');
    var user = req.query.user;
    var product = req.query.product;
    console.log("user :" + user + "  product :"+product);
    var query = "INSERT INTO `history`(`id`, `user`, `product`) VALUES (DEFAULT,?,?)";
    var table = [user, product];
    query = mysql.format(query, table);
    connection.query(query, function (err) {
        if (err) {
            res.json({"Error": true, "Message": "Error executing MySQL query", "err": err});
        } else {
            res.json({"Error": false, "Message": "Product Added !"});
        }
    });
});

app.get('/gethistory/', function (req, res) {
    console.log('totoinsert');
    var user = req.query.user;
    console.log("user :" + user );
    var query = "SELECT * FROM products INNER JOIN history ON history.product = products.id AND history.user = ?";
    var table = [user];
    query = mysql.format(query, table);
    connection.query(query, function (err, rows) {
        if (err) {
            res.status(500);
            res.json({"Error": true, "Message": "Error executing MySQL query"});
        } else {
            if (isEmptyObject(rows)) {
                res.json({"Error": true, "Message": "No product found"});
            } else {
                res.json( rows);
            }
        }
    });
});



//INSERT PRODUCT
app.post('/insertProd/', function (req, res) {
    var imagePath = req.body.imagePath;
    var title = req.body.title;
    var description = req.body.description;
    var price = req.body.price;
    var query = "INSERT INTO `products`(`id`, `imagePath`, `title`, `description`,`genre` ,`price`, `year`) VALUES (DEFAULT,?,?,?,?,?,?)";
    var table = [imagePath, title, description, price];
    query = mysql.format(query, table);
    connection.query(query, function (err) {
        if (err) {
            res.json({"Error": true, "Message": "Error executing MySQL query", "err": err});
        } else {
            res.json({"Error": false, "Message": "Product Added !"});
        }
    });
});