DROP DATABASE IF EXISTS paisa;

CREATE DATABASE paisa;

USE paisa;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userName varchar(55)
);

INSERT INTO user(userName) VALUES('rainbowBrony');
INSERT INTO user(userName) VALUES('theBlackLobo');
INSERT INTO user(userName) VALUES('emperorCamilo');
INSERT INTO user(userName) VALUES('codingNerd45');
INSERT INTO user(userName) VALUES('vatoLoco1');
INSERT INTO user(userName) VALUES('cleverUser2');

CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  post_id INT NOT NULL,
  post_subject text,
  post_text text,
  PRIMARY KEY(id),
  FOREIGN KEY(post_id) REFERENCES user(id)
);

INSERT INTO posts(post_id, post_subject, post_text) VALUES(1, 'Hello darkness my old friend', 'Steve wants reflections, so let\'s give him reflections. Even the worst thing we can do here is good. We have a fantastic little sky!');
INSERT INTO posts(post_id, post_subject, post_text) VALUES(2, 'Ive come to talk with you again', 'Sometimes you learn more from your mistakes than you do from your masterpieces. The only prerequisite is that it makes you happy. If it makes you happy then it\'s good.');
INSERT INTO posts(post_id, post_subject, post_text) VALUES(3, 'because a vision softly creeping', 'Fluff it up a little and hypnotize it. This is a happy place, little squirrels live here and play. Let your heart take you to wherever you want to be.');
INSERT INTO posts(post_id, post_subject, post_text) VALUES(4, 'left its seeds while I was sleeping', 'Let your imagination be your guide. You can do anything here. So don\'t worry about it.');
INSERT INTO posts(post_id, post_subject, post_text) VALUES(5, 'and the vision that was planted in my brain', 'We need dark in order to show light. Working it up and down, back and forth. The only thing worse than yellow snow is green snow.');
INSERT INTO posts(post_id, post_subject, post_text) VALUES(6, 'What are the main documents that I should get once I arrive in the city for the first time?', 'What should I get? How can I get the as well?');
 
CREATE TABLE reply (
  id INT NOT NULL AUTO_INCREMENT,
  reply_id INT NOT NULL,
  reply_text text,
  PRIMARY KEY(id),
  FOREIGN KEY(reply_id) REFERENCES posts(id)
);

INSERT INTO reply(reply_id, reply_text) VALUES(1, 'In restless dreams I walked alone');
INSERT INTO reply(reply_id, reply_text) VALUES(1, 'Narrow streets of cobblestone');
INSERT INTO reply(reply_id, reply_text) VALUES(1, 'Neath the halo of a street lamp');
INSERT INTO reply(reply_id, reply_text) VALUES(2, 'I turned my collar to the cold and damp');
INSERT INTO reply(reply_id, reply_text) VALUES(2, 'When my eyes were stabbed by');
INSERT INTO reply(reply_id, reply_text) VALUES(2, 'The flash of a neon light');
INSERT INTO reply(reply_id, reply_text) VALUES(3, 'That split the night');
INSERT INTO reply(reply_id, reply_text) VALUES(3, 'And touched the sound of silence');
INSERT INTO reply(reply_id, reply_text) VALUES(3, 'And in the naked light I saw');
INSERT INTO reply(reply_id, reply_text) VALUES(4, 'Ten thousand people, maybe more');
INSERT INTO reply(reply_id, reply_text) VALUES(4, 'People talking without speaking');
INSERT INTO reply(reply_id, reply_text) VALUES(4, 'People hearing without listening');
INSERT INTO reply(reply_id, reply_text) VALUES(5, 'People writing songs that voices never share');
INSERT INTO reply(reply_id, reply_text) VALUES(5, 'And no one dared');
INSERT INTO reply(reply_id, reply_text) VALUES(5, 'Disturb the sound of silence');
INSERT INTO reply(reply_id, reply_text) VALUES(6, 'Fools, said I, You do not know');
INSERT INTO reply(reply_id, reply_text) VALUES(6, 'Silence like a cancer grows');
INSERT INTO reply(reply_id, reply_text) VALUES(6, 'Hear my words that I might teach you');
