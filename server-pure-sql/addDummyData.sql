INSERT INTO rooms (roomname) VALUES ('lobby');

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
