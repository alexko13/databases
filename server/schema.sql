DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int(10) NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int(10) NOT NULL AUTO_INCREMENT,
  roomname varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int(10) NOT NULL AUTO_INCREMENT,
  userid int(10),
  roomid int(10),
  timestamp datetime,
  text varchar(140),
  PRIMARY KEY (id),
  FOREIGN KEY (userid) REFERENCES users (id),
  FOREIGN KEY (roomid) REFERENCES rooms (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
INSERT INTO rooms (roomname) VALUES ('bobsroom');

INSERT INTO users (username) VALUES ('bob');
INSERT INTO messages (userid, roomid, timestamp, text) VALUES (1, 1, NOW(), 'His name was robert paulson');
INSERT INTO messages (userid, roomid, timestamp, text) VALUES (1, 1, NOW(), 'HIT ME');

INSERT INTO users (username) VALUES ('fred');
INSERT INTO messages (userid, roomid, timestamp, text) VALUES (2, 1, NOW(), 'Hi i am fred');
INSERT INTO messages (userid, roomid, timestamp, text) VALUES (2, 1, NOW(), 'GOODBYE');
INSERT INTO messages (userid, roomid, timestamp, text) VALUES (2, 1, NOW(), 'im hungry');

INSERT INTO users (username) VALUES ('george');
INSERT INTO messages (userid, roomid, timestamp, text) VALUES (3, 1, NOW(), 'My name is george.');
INSERT INTO messages (userid, roomid, timestamp, text) VALUES (3, 1, NOW(), 'of the JUNGLE');
INSERT INTO messages (userid, roomid, timestamp, text) VALUES (3, 1, NOW(), 'I <3 the zoo');
INSERT INTO messages (userid, roomid, timestamp, text) VALUES (3, 1, NOW(), 'wheres jane?');
