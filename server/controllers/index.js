var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('Handling GET');
      models.messages.get(function(messages) {
        var data = JSON.stringify(messages);
        res.end(JSON.stringify(data));
      });
    },
    post: function (req, res) {
      var result = '';
      req.on('data', function(data) {
        result += data;
      });
      req.on('end', function() {
        var message = JSON.parse(result);
        models.messages.post(message, function(result) {
          console.log(result);
          res.end();
        });
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(users) {
        res.end(JSON.stringify(users));
      });
    },
    post: function (req, res) {
      var result = '';
      req.on('data', function(data){
        result += data;
      });
      req.on('end', function() {
        var username = JSON.parse(result).username;
        models.users.getId(username, function(id) {
          if (id) {
            res.end(JSON.stringify(id));
          } else {
            models.users.post(username, function(id) {
              res.end(JSON.stringify(id));
            });
          }
        });
      });
    },
  }
};
