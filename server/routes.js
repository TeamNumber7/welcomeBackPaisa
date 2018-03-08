const db = require('../database/index.js');
const url = require('url');

//Query db for threads (topic_subject)
exports.getThread = (req, res) => {
  db.getTopic()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}


//Query db for replies on already existing threads
exports.getResponse = (req, res) => {
  db.getReply()
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
}



//Query for posting new threads
exports.postText = (req, res) => {
  db.postTopic()
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
}

//Query for posting new replies
exports.postResponse = (req, res) => {
  db.postReply()
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
}
