const express = require('express');
const router = express.Router();
const mysql = require('mysql');

function dbConnect() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'projet-vue'
    });
    connection.connect();
    return connection;
}

router.get('/', function (req, res) {
    const connection = dbConnect();
    const query = 'SELECT * from quiz';
    connection.query(query, function (err, questions) {
        if (err) throw err;
        res.json(questions);
    });
    connection.end();
});


router.get('/quiz/:slug', function (req, res) {
    const connection = dbConnect();
    const query = "SELECT * from quiz WHERE thematique ='" + req.params.slug + "'";
    connection.query(query, function (err, questions) {
        if (err) throw err;
        res.json(questions);
    });
    connection.end();
});

module.exports = router;