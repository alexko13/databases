var Sequelize = require('sequelize');

var sequelize = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = sequelize.define('User', {
  username: {type: Sequelize.STRING, unique: true}
});

var Message = sequelize.define('Message', {
  //userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

//Message.hasOne(User, {as: 'user', foreignKey: 'userid'});
User.hasMany(Message);

User.sync().then(function() {
  console.log('User table created');
  Message.sync().then(function() {
    console.log('Message table created');
  });
});

// var newUser = User.create({username: 'george'});
// console.log('id: ', newUser.get('id'));
// Message.create({text: 'NEW MESSAGE'}).then(function(instance){
//   console.log(instance);
// });``

module.exports = {
  User: User,
  Message: Message
};

// User.sync().then(function() {
//   var newUser = User.build({username:'bob'});
//   console.log('User table created');
//   newUser.save();
//   //console.log(newUser);
//   Message.sync().then(function() {
//     //var newMessage = Message.build({userid: newUser.id, text: 'hello world'});
//     var newMessage = Message.create({text: 'hello world'}).then(function(instance) {
//       instance.set('UserId', newUser.get('id'));
//       console.log(instance);
//     });
//     // console.log(newMessage);
//     //User.addMessages(newMessage); //????
//     console.log('Message table created');
//     // newMessage.save();
//   });
// });
