const mariadb = require("mariadb/callback");
const mariadbConfig = require("./config.js");
const { Pool } = require("pg");

const connection = mariadb.createConnection({
  host: "database-1.cscmgcicurmq.us-east-1.rds.amazonaws.com",
  user: "root",
  password: "samaung1",
  database: "test",
});

const saveWorkout = function (data, callback) {
  console.log("saving final version of workout");

  if (
    JSON.stringify(data)
      .split(",")[4]
      .slice(0, JSON.stringify(data).split(",")[4].length - 9) ===
    "354634563dfghdfgh439003235"
  ) {
    var dataSplit = JSON.stringify(data).split(",");

    var date = dataSplit[0].slice(2).split(" ").slice(1, 4).join(" ");
    var name = dataSplit[1];
    var miles = dataSplit[2];
    var minutes = dataSplit[3];
    var runCode = "354634563dfghdfgh439003235";

    var notes = "";

    var sql = `INSERT INTO workout1 (name, workoutPlan, workoutDate, workout1, workout2) VALUES ('${name}', '${runCode}', '${date}', '${miles}', '${minutes}');`;

    connection.query(sql, function (err, results) {
      if (err) {
        console.log("error querying database: ", err);
      } else {
        console.log("run saved in workout table!");
      }
      // });
      // }
    });
  } else {
    connection.connect((err) => {
      if (err) {
        console.log("error connecting to database: ", err);
        return;
      } else {
        var dataSplit = data.split(",");

        console.log("datasplit is here ", data);

        var name = dataSplit[51];

        var date = dataSplit[0].slice(2).split(" ").slice(1, 4).join(" ");
        var workout1 = [
          dataSplit[1],
          dataSplit[2],
          dataSplit[3],
          dataSplit[4],
          dataSplit[5],
          dataSplit[6],
          dataSplit[7],
        ];
        var workout2 = [
          dataSplit[8],
          dataSplit[9],
          dataSplit[10],
          dataSplit[11],
          dataSplit[12],
          dataSplit[13],
          dataSplit[14],
        ];
        var workout3 = [
          dataSplit[15],
          dataSplit[16],
          dataSplit[17],
          dataSplit[18],
          dataSplit[19],
          dataSplit[20],
          dataSplit[21],
        ];
        var workout4 = [
          dataSplit[22],
          dataSplit[23],
          dataSplit[24],
          dataSplit[25],
          dataSplit[26],
          dataSplit[27],
          dataSplit[28],
        ];
        var workout5 = [
          dataSplit[29],
          dataSplit[30],
          dataSplit[31],
          dataSplit[32],
          dataSplit[33],
          dataSplit[34],
          dataSplit[35],
        ];
        var workout6 = [
          dataSplit[36],
          dataSplit[37],
          dataSplit[38],
          dataSplit[39],
          dataSplit[40],
          dataSplit[41],
          dataSplit[42],
        ];
        var workout7 = [
          dataSplit[43],
          dataSplit[44],
          dataSplit[45],
          dataSplit[46],
          dataSplit[47],
          dataSplit[48],
          dataSplit[49],
        ];
        var notes = [`${dataSplit[50]}`];

        var notesSplit = notes[0].split(" ");
        for (var k = 0; k < notesSplit.length; k++) {
          if (notesSplit[k] === '":"') {
            notesSplit[k] = "=";
          }
        }
        notes = [notesSplit.join(" ")];

        if (notes[0].indexOf('":"') !== -1) {
          notesSplit = notes[0].split('":"');
          notes = [notesSplit.join("=")];
        }

        var day =
          notes[0].indexOf("=") !== -1 || notes[0].indexOf('":"') !== -1
            ? JSON.stringify(dataSplit[53].slice(0, dataSplit[53].length - 2))
            : JSON.stringify(dataSplit[53].slice(0, dataSplit[53].length - 5));

        var color;
        var sql3 = `select * from templates where templateName = '${day}';`;

        connection.query(sql3, function (err, results) {
          if (err) {
            console.log("error querying database: ", err);
          } else {
            if (results[0] !== undefined) {
              color = results[0].color;
            }

            // var sql4 = `delete from workout1 where name = '${name}' and  workoutDate = '${date}' and workoutPlan = '${day}';`;

            // connection.query(sql4, function(err, results) {
            //   if (err) {
            //     console.log('error querying database: ', err);
            //   } else {

            var sql = `INSERT IGNORE INTO workout1 (name, workoutPlan, workoutDate, workout1, workout2, workout3, workout4, workout5, workout6, workout7, notes, color) VALUES ('${name}', '${day}', '${date}', '${workout1}', '${workout2}', '${workout3}', '${workout4}', '${workout5}', '${workout6}', '${workout7}', '${notes}', '${color}');`;

            connection.query(sql, function (err, results) {
              if (err) {
                console.log("error querying database: ", err);
              } else {
                console.log("workout saved!");
              }
              // });
              // }
            });
          }
        });
      }
    });
  }
};

const getWorkouts = function (data, callback) {
  connection.connect((err) => {
    if (err) {
      console.log("error connecting to database: ", err);
      return;
    }
    console.log("connection established");
    var name = data.slice(2, data.length - 5);
    var sql = `select * from workout1 where name = '${name.toUpperCase()}'`;
    connection.query(sql, function (err, results) {
      if (err) {
        console.log("error querying database: ", err);
      } else {
        callback(results);
      }
    });
  });
};

const addTemplate = function (data, callback) {
  connection.connect((err) => {
    if (err) {
      console.log("error connecting to database: ", err);
      return;
    } else {
      var dataSplit = data.split(",");
      var workout1 = [dataSplit[0].slice(2), dataSplit[1], dataSplit[2]];
      var workout2 = [dataSplit[3], dataSplit[4], dataSplit[5]];
      var workout3 = [dataSplit[6], dataSplit[7], dataSplit[8]];
      var workout4 = [dataSplit[9], dataSplit[10], dataSplit[11]];
      var workout5 = [dataSplit[12], dataSplit[13], dataSplit[14]];
      var workout6 = [dataSplit[15], dataSplit[16], dataSplit[17]];
      var workout7 = [dataSplit[18], dataSplit[19], dataSplit[20]];

      var name = dataSplit[22];
      var workoutName = JSON.stringify(
        dataSplit[24].slice(0, dataSplit[24].length - 5)
      );

      var sql = `INSERT INTO templates VALUES ('${name.toUpperCase()}', '${workoutName}', '${workout1}', '${workout2}', '${workout3}', '${workout4}', '${workout5}', '${workout6}', '${workout7}', 'Red');`;

      connection.query(sql, function (err, results) {
        if (err) {
          console.log("error querying database: ", err);
        } else {
          console.log("template saved!");
        }
      });
    }
  });
};

const getTemplates = function (data, callback) {
  connection.connect((err) => {
    if (err) {
      console.log("error connecting to database: ", err);
      return;
    } else {
      var name = data.slice(2, data.length - 5);
      var sql = `select * from templates where name = '${name.toUpperCase()}'`;
      connection.query(sql, function (err, results) {
        if (err) {
          console.log("error ! ! !: ", err);
        } else {
          callback(results);
        }
      });
    }
  });
};

const createAccount = function (data, callback) {
  connection.connect((err) => {
    if (err) {
      console.log("error connecting to database: ", err);
      return;
    } else {
      const dataSplit = data.split(",");
      var name = dataSplit[0].slice(2).toUpperCase();
      var password = dataSplit[1].slice(0, dataSplit[1].length - 5);

      var sql = `select * from usersAndPasses where name = '${name}'`;
      connection.query(sql, function (err, results) {
        if (err) {
          console.log("error ! ! !: ", err);
        } else {
          if (results.length === 0) {
            var sql = `insert into usersAndPasses values ('${name}', '${password}')`;
            connection.query(sql, function (err, results) {
              if (err) {
                console.log("error ! ! !: ", err);
              } else {
                callback(results);
              }
            });
          } else {
            callback("0");
          }
        }
      });
    }
  });
};

const attemptLogin = function (data, callback) {
  connection.connect((err) => {
    if (err) {
      console.log("error connecting to database: ", err);
      return;
    } else {
      const dataSplit = data.split(",");
      var name = dataSplit[0].slice(2).toUpperCase();
      var password = dataSplit[1].slice(0, dataSplit[1].length - 5);

      var sql = `select * from usersAndPasses where name = '${name}' and password = '${password}';`;
      connection.query(sql, function (err, res) {
        if (err) {
          console.log("error ! ! !: ", err);
        } else {
          callback(res);
        }
      });
    }
  });
};

const deleteTemplate = function (data, callback) {
  var dataSplit = JSON.stringify(data).split(",");
  console.log("datasplit: ", dataSplit);

  connection.connect((err) => {
    if (err) {
      console.log("error connecting to database: ", err);
      return;
    } else {
      console.log(dataSplit);
      const name = dataSplit[1].slice(0, dataSplit[1].length - 5);
      var template = dataSplit[0].slice(4, dataSplit[0].length - 2);
      var templateSplit = template.split("");

      for (var i = 0; i < templateSplit.length; i++) {
        if (templateSplit[i] === "\\" || templateSplit[i] === '"') {
          templateSplit.splice(i, 1);
        }
      }
      template = templateSplit.join("");

      console.log(name, template);

      var sql = `delete from templates where templateName = '${JSON.stringify(
        template
      )}' and name = '${name}';`;
      connection.query(sql, function (err, res) {
        if (err) {
          console.log("error ! ! !: ", err);
        } else {
          callback(res);
        }
      });
    }
  });
};

const changeColor = function (data, callback) {
  connection.connect((err) => {
    if (err) {
      console.log("error connecting to database: ", err);
      return;
    } else {
      const dataSplit = JSON.stringify(data).split(",");

      var templateName = dataSplit[0].slice(4, dataSplit[0].length - 2);
      var color = dataSplit[1].slice(0, dataSplit[1].length - 5);

      var sql = `update templates set color = '${color}' where templateName = '"${templateName}"';`;
      connection.query(sql, function (err, res) {
        if (err) {
          console.log("error ! ! !: ", err);
        } else {
          callback(res);
        }
      });

      var sql2 = `update workout1 set color = '${color}' where workoutPlan = '"${templateName}"';`;
      connection.query(sql2, function (err, res) {
        if (err) {
          console.log("error ! ! !: ", err);
        }
      });
    }
  });
};

const deleteWorkout = function (data, callback) {
  var dataSplit = JSON.stringify(data).split(",");
  console.log("data!=D: ", dataSplit);

  var workoutName = dataSplit[0].slice(2);

  // console.log("workoutName: ", workoutName);
  var name = dataSplit[2];

  var id = dataSplit[1];
  if (workoutName === "Run") {
    var date = dataSplit[3];
    var miles = dataSplit[4].slice(0, dataSplit[4].length - 5);

    connection.connect((err) => {
      if (err) {
        console.log("error connecting to database: ", err);
        return;
      } else {
        var sql = `delete from runData where date = '${date}' and name = '${name}' and miles = '${miles}';`;
        console.log("sql: ", sql);
        connection.query(sql, function (err, res) {
          if (err) {
            console.log("error ! ! !: ", err);
          } else {
            console.log(res);
          }
        });
      }
    });
  }

  connection.connect((err) => {
    if (err) {
      console.log("error connecting to database: ", err);
      return;
    } else {
      if (workoutName === "Run") {
        var sql = `delete from workout1 where id = '${id}' and name = '${name}';`;
      } else {
        var sql = `delete from workout1 where workoutPlan = '"${workoutName}"' and id = '${id}' and name = '${name}';`;
      }

      console.log("sql: ", sql);
      connection.query(sql, function (err, res) {
        if (err) {
          console.log("error ! ! !: ", err);
        } else {
          console.log(res);
          callback(res);
        }
      });
    }
  });
};

const submitRun = function (data, callback) {
  var dataSplit = JSON.stringify(data).split(",");
  console.log("data!: ", dataSplit);

  var date = dataSplit[0].slice(2).split(" ").slice(1, 4).join(" ");
  var name = dataSplit[1];
  var miles = dataSplit[2];
  var minutes = dataSplit[3].slice(0, dataSplit[3].length - 5);

  var notes = "";

  var sql = `insert into runData (name, miles, minutes, notes, date) values ('${name}', '${miles}', '${minutes}', '${notes}', '${date}')`;

  connection.query(sql, function (err, results) {
    if (err) {
      console.log("error ! ! !: ", err);
    } else {
      callback(results);
      console.log("res: ", results);
    }
  });
};

const getRunData = function (data, callback) {
  connection.connect((err) => {
    if (err) {
      console.log("error connecting to database: ", err);
      return;
    } else {
      var name = data.slice(2, data.length - 5);
      var sql = `select * from runData where name = '${name.toUpperCase()}'`;
      connection.query(sql, function (err, results) {
        if (err) {
          console.log("error ! ! !: ", err);
        } else {
          callback(results);
        }
      });
    }
  });
};

const submitPR = function (data, callback) {
  // var dataSplit = JSON.stringify(data).split(",");
  console.log("data!: ", data);

  var sql = `insert into PRTable (name, exercise, weight, reps) values ('${data.name}', '${data.exercise}', '${data.weight}', '${data.reps}')`;

  connection.query(sql, function (err, results) {
    if (err) {
      console.log("error ! ! !: ", err);
    } else {
      callback(results);
      console.log("res: ", results);
    }
  });
};

const getPRs = function (data, callback) {
  var name = JSON.stringify(data).slice(2, JSON.stringify(data).length - 5);

  var sql = `select * from PRTable where name = '${name}';`;

  connection.query(sql, function (err, results) {
    if (err) {
      console.log("error ! ! !: ", err);
    } else {
      callback(results);
      console.log("res: ", results);
    }
  });
};

module.exports.saveWorkout = saveWorkout;
module.exports.getWorkouts = getWorkouts;
module.exports.addTemplate = addTemplate;
module.exports.getTemplates = getTemplates;
module.exports.createAccount = createAccount;
module.exports.attemptLogin = attemptLogin;
module.exports.deleteTemplate = deleteTemplate;
module.exports.changeColor = changeColor;
module.exports.deleteWorkout = deleteWorkout;
module.exports.submitRun = submitRun;
module.exports.getRunData = getRunData;
module.exports.submitPR = submitPR;
module.exports.getPRs = getPRs;
