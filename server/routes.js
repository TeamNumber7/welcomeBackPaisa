const db = require('../database/index.js');
const url = require('url');
const path = require('path');

//Query db for threads (topic_subject)
exports.getThread = (req, res) => {
  db.getTopic()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
};

//Query db for replies on already existing threads
exports.getResponse = (req, res) => {
  let postId = parseInt(req.url.split('/')[2])
  Promise.all([
    db.getSingleTopic(postId),
    db.getReply(postId)
  ])
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
};

//Query for posting new threads
exports.postThread = (req, res) => {
  let subject = req.body.subject;
  let comment = req.body.comment;
  db.postTopic(subject, comment)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
};

//Query for posting new replies
exports.postResponse = (req, res) => {
  let reply = req.body.reply;
  let postId = parseInt(req.url.split('/')[2])
  db.postReply(postId, reply)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
};
