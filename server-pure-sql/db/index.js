var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

// TODO: When should we close the connection? Or do we not need to? If not, why ?
module.exports.query = query = function(qStr, callback) {
  connection.query(qStr, function(err, rows, fields){
    // console.log('error: ', err);
    // console.log('rows: ', rows);
    // console.log('fields: ', fields);
    callback(rows);
  });
};

// query('SELECT users.username, messages.text, rooms.roomname from users join messages on messages.userid = users.id join rooms on rooms.id = messages.roomid', function(data) {
//   console.log(data);
// })

//select users.username, message.text, rooms.roomname from messages join rooms on rooms.id = messages.roomid join users on message.userid = users.id

// SELECT users.username, messages.text, rooms.roomname from users join messages on messages.userid = users.id join rooms on rooms.id = messages.roomid
