const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

  //user
  /*var newUserName = function(cb){
  con.query('INSERT INTO user(userName) VALUES(?)',[userName],(err,results,field) =>{
    if(err) {
       cb(err, null);
     } else {
       console.log(results);
       cb(null, results);
     }
  })
}*/


//post new topic(trhead)
  const postTopic = function() {
    return new Promise((resolve, reject) = {
  connection.query('INSERT INTO topics(topic_subject) VALUES(?)',[topic_subject], (err, data) => {
    if(err){
       return reject(err);
     }
     return resolve(data);
   })
  })
};

//gets topic already created
  const getTopic = function() {
    return new Promise((resolve, reject) => {
    connection.query('SELECT topic_subject FROM topics', (err, data) => {
      if(err){
        return reject(err);
       }
       return resolve(data);
    })
  })
};
//post reply to threads in home page
  const postReply = function() {
    return new Promise((resolve, reject) => {
  connection.query('INSERT INTO reply(reply_text) VALUES(?)',[reply_text], (err, data) => {
    if(err){
      return reject(err);
     }
     return resolve(data);
   })
 })
};

//gets replies from client to be viewed by client
  const getReply = function() {
    return new Promise((resolve, reject) => {
    connection.query('SELECT reply_text FROM reply', (err, data) => {
      if(err){
         return reject(err);
       }
       return resolve(data):
    })
  })
}

module.exports = {
  postTopic,
  getTopic;
  postReply;
  getReply;
}
