const mysql = require('mysql');

const con = mysql.createConnection({
    host: "{YOUR_HOST}",
    user: "{YOUR_USER}",
    password: "{YOUR_PASSWORD}",
    database: "{YOUR_DATABASE_NAME}"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con