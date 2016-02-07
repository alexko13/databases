var models = require('../models');
var bluebird = require('bluebird');


  // // now instantiate an object and save it:
  // var newUser = User.build({username: 'Jean Valjean'});
  // newUser.save().then(function() {

  //   /* This callback function is called once saving succeeds. */

  //   // Retrieve objects from the database:
  //   User.findAll({ where: {username: 'Jean Valjean'} }).then(function(usrs) {
  //     // This function is called back with an array of matches.
  //     for (var i = 0; i < usrs.length; i++) {
  //       console.log(usrs[i].username + ' exists');
  //     }
  //   });
  // });


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
      console.log(req.body);
      var message = req.body;
      models.messages.post(message, function(result) {
        console.log(result);
        res.end();
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
      var username = req.body.username;
      models.User.findAll({where: {username: username}})
      .then(function(user){
        if (user[0]) {
          res.end(JSON.stringify(user[0].get({plain: true}).id));
        } else {
          models.User.create({username: username}).then(function(user) {
            res.end(JSON.stringify(user.get({plain: true}).id));
          });
        }
      })
      .catch(function(err) {
        console.log(err);
        res.end(err);
      });
    }
  }
};
