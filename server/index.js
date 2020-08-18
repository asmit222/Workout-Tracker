const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const PORT = 2020;
var path = require('path');
const db = require("../database");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/../public')));

app.listen(PORT, function() {
console.log('listening')
});


app.get('/', function (req, res) {
  res.render('index', {});
});

app.post('/userAndPassChecker', function (req, res) {
  res.status(200)
  db.checkUser(JSON.stringify(req.body), function (result, givenUser, givenPass) {
    if(result.length > 0) {
    var realUser = result[0].name;
    var realPass = result[0].password;
    }
    // console.log(realUser, realPass, givenUser, givenPass);

    if(realPass === givenPass) {
      res.json(realUser);
    }
  })
});

app.post('/getWorkouts', function (req, res) {
  res.status(200);
  db.getWorkouts(JSON.stringify(req.body), function (data) {
    res.json(data);
  })
});




app.post('/test', function (req, res) {
  res.status(200);
  db.saveWorkout(JSON.stringify(req.body), () => console.log('checked user!'));
  res.send('done')
  });
