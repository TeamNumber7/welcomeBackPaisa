var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = require('../database/index.js');

app.use(bodyParser.json());
 app.use(express.static(__dirname + '/../client/dist'));


 //GET request routes
 app.get("/home", route.getAllThreads)

 app.get("/individualThread", route.getIndividualThread)

 app.get('/aboutUs', route.renderAboutUs)

 module.exports = app;
