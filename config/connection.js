var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection =  mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "",
    database: "hamburger_db"
    });
}

connection.connect(function(err) {
    if (err) {throw err;}
    console.log("Connected as ID + " + connection.threadId);
});

module.exports = connection;