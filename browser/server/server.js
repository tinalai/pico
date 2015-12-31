var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res, next) {
  console.log('sending index.html...');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

console.log(path.join(__dirname, '../public'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`The browser server is listening at http://${host}:${port}`);
});
