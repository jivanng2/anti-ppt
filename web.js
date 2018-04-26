var express = require("express");
var app = express();
var path = require('path');
// app.use(express.logger());
 app.use("/", express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/seminar', function(req, res) {
  res.sendFile(path.join(__dirname + '/seminar.html'));
});

app.get('/dissertation', function(req, res) {
  res.sendFile(path.join(__dirname + '/dissertation.html'));
});

app.get('/project', function(req, res) {
  res.sendFile(path.join(__dirname + '/project.html'));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
