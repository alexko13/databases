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
    }, // a function which produces all the messages
    post: function (data, callback) {

      //data = {message: '', username: 'bob', room}

      var userIdQuery = ('');
      // find user ID
      db.query(userIdQuery, function(userId) {
        var room = 'lobby';
        // test if userId exists
          // if it exists, get it and continue...
        db.query(userIdQuery, function(userId) {
        });
          // if not, create it, then continue...
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
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
      // create new user
      db.query('INSERT INTO users (username) VALUES ("'+ username +'")', function(result) {
        callback(result.insertId);
      });
    }
  }
};

// module.exports.users.post('yoiutoiu', console.log);
