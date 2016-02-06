var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      //TODO: also get rooms.id and users.id
      var query = ('SELECT users.username, messages.text, rooms.roomname ' +
                  'FROM users ' +
                  'JOIN messages ' +
                    'ON messages.userid = users.id ' +
                  'JOIN rooms ' +
                    'ON rooms.id = messages.roomid');
      db.query(query, function(rows) {
        callback(rows);
      });
    },
    post: function (data, callback) {
      var query = 'INSERT INTO messages' +
                  '(roomid, userid, text, timestamp)' +
                  'VALUES (1, "' + data.userid + '", "' + data.text + '", NOW())';
      db.query(query, function(result) {
        callback(result);
      });
    }
  },

  users: {
    getId: function(username, callback) {
      db.query('SELECT id FROM users WHERE username="' + username + '"', function(result) {
        if (result.length === 0) {
          callback(undefined);
        } else {
          callback(result[0].id);
        }
      });
    },
    get: function (callback) {
      db.query('SELECT * FROM users', function(result) {
        callback(result);
      });
    },
    post: function (username, callback) {
      db.query('INSERT INTO users (username) VALUES ("'+ username +'")', function(result) {
        callback(result.insertId);
      });
    }
  }
};
