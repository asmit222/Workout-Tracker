const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const PORT = 2020;
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + "/../public"));
app.use(express.static(path.join(__dirname + '/../public')));

app.listen(PORT, function() {
console.log('listening')
});


app.get('/', function (req, res) {
  res.render('index', {});
});


app.get('/test', function (req, res) {
  res.send('test!');
  });
