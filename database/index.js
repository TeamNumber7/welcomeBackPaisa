const mysql = require('mysql2');
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


//post new post(thread)
  const postTopic = function() {
    return new Promise((resolve, reject) => {
  connection.query('INSERT INTO posts(post_id, post_subject) VALUES(?, ?)',
    [post_id, post_subject], (err, data) => {
    if(err){
       return reject(err);
     }
     return resolve(data);
   })
  })
};

//gets post already created
  const getTopic = function() {
    return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM posts', (err, data) => {
      if(err){
        return reject(err);
       }
       return resolve(data);
    })
  })
};
//GET single Topic
const getSingleTopic = function(postId) {
  return new Promise((resolve, reject) => {
  connection.query('SELECT * FROM posts WHERE post_id = ?', [postId], (err, data) => {
    if(err){
      return reject(err);
     }
     return resolve(data);
  })
})
};

//post reply to threads in home page
  const postReply = function(postId, reply) {
    return new Promise((resolve, reject) => {
  connection.query('INSERT INTO reply(reply_id, reply_text) VALUES(?, ?)',
  [postId, reply], (err, data) => {
    if(err){
      return reject(err);
     }
     return resolve(data);
   })
 })
};

//gets replies from client to be viewed by client
  const getReply = function(postId) {
    return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM reply WHERE reply_id = ?', [postId], (err, data) => {
      if(err){
         return reject(err);
       }
       return resolve(data);
    })
  })
}

module.exports = {
  postTopic,
  getTopic,
  getSingleTopic,
  postReply,
  getReply
}
