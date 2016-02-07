var models = require('../models');
var bluebird = require('bluebird');
var Sequelize = require('sequelize');


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
      models.Users.findAll()
      .then(function(users) {
        var usersMap = {};
        users.forEach(function(user) {
          usersMap[user.id] = user.username;
        });
        models.Messages.findAll()
        .then(function(messages) {
          var mapped = messages.map(function(message) {
            return {
              text: message.text,
              username: usersMap[message.get({plain: true}).UserId],
              roomname: 'lobby'
            };
          });
          res.end(JSON.stringify(mapped));
        });
      });
      // models.Messages.findAll({
      //   include: [{
      //     model: models.Users,
      //     where: {id: Sequelize.col('messages.UserId')}
      //   }]
      // })
      // .then(function(messages) {
      //   console.log(messages);
      //   res.end(JSON.stringify(messages));
      // });
    },
    post: function (req, res) {
      var username = req.body.username;
      var text = req.body.text;
      models.Users.findOne({where: {username: username}})
      .then(function(user) {
        var userid = user.get({plain: true}).id;
        models.Messages.create({'text': text, 'UserId': userid, 'roomname': 'lobby'})
        .then(function(data) {
          res.end(JSON.stringify(data));
        });
      })
      .catch(function(err) {
        console.log('Failed to add message: ', err);
        res.end(err);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.Users.findAll()
      .then(function(users) {
        res.end(JSON.stringify(users));
      });
    },
    post: function (req, res) {
      var username = req.body.username;
      models.Users.findAll({where: {username: username}})
      .then(function(user){
        if (user[0]) {
          res.end(JSON.stringify(user[0].get({plain: true}).id));
        } else {
          models.Users.create({username: username}).then(function(user) {
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
