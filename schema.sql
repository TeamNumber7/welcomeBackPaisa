DROP DATABASE IF EXISTS paisa;


CREATE DATABASE paisa;


USE paisa;

CREATE TABLE user(
  ID int NOT NULL AUTO_INCREMENT,
  userName varchar(55),
  PRIMARY KEY(ID)
);


INSERT INTO user(userName) VALUES('rainbowBrony');
INSERT INTO user(userName) VALUES('theBlackLobo');
INSERT INTO user(userName) VALUES('emperorCamilo');
INSERT INTO user(userName) VALUES('codingNerd45');
INSERT INTO user(userName) VALUES('vatoLoco1');
INSERT INTO user(userName) VALUES('cleverUser2');


CREATE TABLE topics (
  topic_id INT NOT NULL AUTO_INCREMENT,
  topic_subject varchar(255) NOT NULL,
  topic_by INT,
  FOREIGN KEY (topic_id)
);


INSERT INTO topics(topic_subject) VALUES('');
INSERT INTO topics(topic_subject) VALUES('');
INSERT INTO topics(topic_subject) VALUES('');
INSERT INTO topics(topic_subject) VALUES('');
INSERT INTO topics(topic_subject) VALUES('');
INSERT INTO topics(topic_subject) VALUES('');


CREATE TABLE reply(
  replyID INT NOT NULL AUTO_INCREMENT,
  reply_text text,
  PRIMARY KEY(replyID),
  topic_id INT AUTO_INCREMENT,
  FOREIGN KEY(topic_id) REFERENCES topics(topic_id),
  topic_id INT
);


INSERT INTO reply(reply_text) VALUES('');
INSERT INTO reply(reply_text) VALUES('');
INSERT INTO reply(reply_text) VALUES('');
INSERT INTO reply(reply_text) VALUES('');
INSERT INTO reply(reply_text) VALUES('');
INSERT INTO reply(reply_text) VALUES('');


CREATE TABLE rating(
  ratingID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY(ratingID),
  replyID int,
  FOREIGN KEY(replyID) REFERENCES reply(replyID),
  topic_id int,
  FOREIGN KEY(topic_id) REFERENCES comments(topic_id)
);


INSERT INTO rating(replyID, topic_id) VALUES(1,1);
INSERT INTO rating(replyID, topic_id) VALUES(2,2);
INSERT INTO rating(replyID, topic_id) VALUES(3,3);
INSERT INTO rating(replyID, topic_id) VALUES(6,6);
INSERT INTO rating(replyID, topic_id) VALUES(5,5);
INSERT INTO rating(replyID, topic_id) VALUES(4,4);
