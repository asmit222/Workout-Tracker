const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 2020;
var path = require("path");
const db = require("../database");
var expressStaticGzip = require("express-static-gzip");

app.use(expressStaticGzip(path.join(__dirname, "dist"), {}));

app.use(
  cors({ origin: "*", preflightContinue: false, optionsSuccessStatus: 204 })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + "/../public/dist")));

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "..", "public", "manifest.json"));
});

app.get("https://www.eazy-trak.com/", function (req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "..", "public", "manifest.json"));
});

app.get("/logo180.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public", "logo180.png"));
});
app.get("/logo225.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public", "logo225.png"));
});
app.get("/logo192.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public", "logo192.png"));
});
app.get("/logo512.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public", "logo512.png"));
});
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public", "favicon.ico"));
});
// app.get("/", function (req, res) {
//   res.status(200);
//   res.sendFile(path.join(__dirname, "..", "public/dist", "index.html"));
// });

app.get("/manifest.json", function (req, res) {
  res.sendFile(path.join(__dirname, "/../public", "manifest.json"));
});

app.get("/workbox-fe7d1311.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../workbox-fe7d1311.js"));
});

app.get("/service-worker.js", (req, res) => {
  // response.writeHead(200, {
  //   "Service-Worker-Allowed": "/",
  //   "Content-Type": "application/javascript",
  // });
  // res.sendFile(path.resolve(__dirname, "public", "dist", "service-worker.js"));
  res.sendFile(path.resolve(__dirname, "../service-worker.js"));
});

app.get("/", function (req, res) {
  res.render("index", {});
});

// app.get("*.js", function (req, res, next) {
//   req.url = req.url + ".gz";
//   res.set("Content-Encoding", "gzip");
//   next();
// });

app.post("/userAndPassChecker", function (req, res) {
  res.status(200);
  // db.checkUser(JSON.stringify(req.body), function (result, givenUser, givenPass) {
  //   if(result.length > 0) {
  //   var realUser = result[0].name;
  //   var realPass = result[0].password;
  //   }
  // console.log(realUser, realPass, givenUser, givenPass);

  // if(realPass === givenPass) {
  //   res.json(realUser);
  // }
  // })
  res.json("done");
});

app.post("/getWorkouts", function (req, res) {
  console.log("get workouts - request received");
  res.status(200);
  db.getWorkouts(JSON.stringify(req.body), function (data) {
    if (data) {
      res.json(data);
    } else {
      console.log("error");
    }
  });
});

app.post("/test", function (req, res) {
  console.log("trying to save workout helloooo");
  res.status(200);
  db.saveWorkout(JSON.stringify(req.body), () => console.log("saved workout!"));
  res.send("done");
});

app.post("/createTemplate", function (req, res) {
  console.log("trying to save workout");
  res.status(200);
  db.addTemplate(JSON.stringify(req.body), () =>
    console.log("added template!")
  );
  res.send("done");
});

app.post("/getTemplates", function (req, res) {
  res.status(200);

  db.getTemplates(JSON.stringify(req.body), function (data) {
    if (data) {
      res.json(data);
    } else {
      console.log("error");
    }
  });
});

app.post("/createAccount", function (req, res) {
  res.status(200);
  db.createAccount(JSON.stringify(req.body), function (data) {
    if (data) {
      res.json(data);
    } else {
      console.log("error");
    }
  });
});

app.post("/attemptLogin", function (req, res) {
  res.status(200);
  db.attemptLogin(JSON.stringify(req.body), function (data) {
    if (data) {
      res.json(data);
    } else {
      console.log("error");
    }
  });
});

app.post("/deleteTemplate", function (req, res) {
  res.status(200);
  db.deleteTemplate(req.body, function (data) {
    if (data) {
      // console.log(data)
      res.json(data);
    } else {
      console.log("error");
    }
  });
});

app.post("/changeColor", function (req, res) {
  res.status(200);
  db.changeColor(req.body, function (data) {
    if (data) {
      // console.log(data)
      res.json(data);
    } else {
      console.log("error");
    }
  });
});

app.post("/deleteWorkout", function (req, res) {
  res.status(200);
  db.deleteWorkout(req.body, function (data) {
    if (data) {
      // console.log(data)
      res.json(data);
    } else {
      console.log("error");
    }
  });
});

app.post("/submitRun", function (req, res) {
  res.status(200);
  db.submitRun(req.body, function (data) {
    if (data) {
      res.json(data);
      console.log(data);
    } else {
      console.log("error");
    }
  });

  // console.log(req.body);
});

app.post("/getRunData", function (req, res) {
  res.status(200);

  db.getRunData(JSON.stringify(req.body), function (data) {
    if (data) {
      res.json(data);
      console.log(data);
    } else {
      console.log("error");
    }
  });
});
