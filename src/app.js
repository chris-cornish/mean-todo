'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

app.get('/todos', function(req, res) {
  res.send("These are the todos!");
});

app.listen(3000, function() {
  console.log("The server is running on port 3000!");
});
