var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

module.exports.query = query = function(qStr, callback) {
  connection.query(qStr, function(err, rows, fields){
    callback(rows);
  });
  connection.end();
};
