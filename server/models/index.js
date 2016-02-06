var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      //SELECT
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
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

