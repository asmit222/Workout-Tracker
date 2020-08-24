const mariadb = require("mariadb/callback");
const mariadbConfig = require("./config.js");
const { Pool } = require('pg');

const connection = mariadb.createConnection({
  host     : 'database-1.cscmgcicurmq.us-east-1.rds.amazonaws.com',
  user     : 'root',
  password : 'samaung1',
  database : 'test',
});

const saveWorkout = function(data, callback) {

  connection.connect((err) => {
    if(err) {
      console.log('error connecting to database: ', err);
      return;
    } else {

      var dataSplit = data.split(',');

      var date = dataSplit[0].slice(2);
      var workout1 = [dataSplit[1], dataSplit[2], dataSplit[3], dataSplit[4], dataSplit[5], dataSplit[6], dataSplit[7]];
      var workout2 = [dataSplit[8], dataSplit[9], dataSplit[10], dataSplit[11], dataSplit[12], dataSplit[13], dataSplit[14]];
      var workout3 = [dataSplit[15], dataSplit[16], dataSplit[17], dataSplit[18], dataSplit[19], dataSplit[20], dataSplit[21]];
      var workout4 = [dataSplit[22], dataSplit[23], dataSplit[24], dataSplit[25], dataSplit[26], dataSplit[27], dataSplit[28]];
      var workout5 = [dataSplit[29], dataSplit[30], dataSplit[31], dataSplit[32], dataSplit[33], dataSplit[34], dataSplit[35]];
      var workout6 = [dataSplit[36], dataSplit[37], dataSplit[38], dataSplit[39], dataSplit[40], dataSplit[41], dataSplit[42]];
      var workout7 = [dataSplit[43], dataSplit[44], dataSplit[45], dataSplit[46], dataSplit[47], dataSplit[48], dataSplit[49]];
      var notes = [`${dataSplit[50]}`];

      var name = dataSplit[51];

      var day = JSON.stringify(dataSplit[53].slice(0, dataSplit[53].length - 5));

var color;
  var sql3 = `select * from templates where templateName = '${day}';`;

        connection.query(sql3, function(err, results) {
console.log('day', day)
          if (err) {
            console.log('error querying database: ', err);
          } else {
            console.log('res: ', results);
           color = results[0].color;
           var sql = `INSERT INTO workout1 VALUES ('${name}', '${day}', '${date}', '${workout1}', '${workout2}', '${workout3}', '${workout4}', '${workout5}', '${workout6}', '${workout7}', '${notes}', '${color}');`;

           connection.query(sql, function(err, results) {
             if (err) {
               console.log('error querying database: ', err);
             } else {
               console.log('workout saved!');
             }
           });


          }

        });


      }
    })



};

const getWorkouts = function (data, callback) {

  connection.connect((err) => {
    if(err) {
      console.log('error connecting to database: ', err);
      return;
    }
    console.log('connection established');
    var name = data.slice(2, data.length - 5);
        var sql = `select * from workout1 where name = '${name.toUpperCase()}'`;
        connection.query(sql, function(err, results) {
          if (err) {
           console.log('error querying database: ', err);
          } else {
            callback(results);
          }
        });

  })

}

const addTemplate = function (data, callback) {

  connection.connect((err) => {
    if(err) {
      console.log('error connecting to database: ', err);
      return;
    } else {
var dataSplit = data.split(',');
var workout1 = [dataSplit[0].slice(2), dataSplit[1], dataSplit[2]];
var workout2 = [dataSplit[3], dataSplit[4], dataSplit[5]];
var workout3 = [dataSplit[6], dataSplit[7], dataSplit[8]];
var workout4 = [dataSplit[9], dataSplit[10], dataSplit[11]];
var workout5 = [dataSplit[12], dataSplit[13], dataSplit[14]];
var workout6 = [dataSplit[15], dataSplit[16], dataSplit[17]];
var workout7 = [dataSplit[18], dataSplit[19], dataSplit[20]];

var name = dataSplit[22];
var workoutName = JSON.stringify(dataSplit[24].slice(0, dataSplit[24].length - 5));


var sql = `INSERT INTO templates VALUES ('${name.toUpperCase()}', '${workoutName}', '${workout1}', '${workout2}', '${workout3}', '${workout4}', '${workout5}', '${workout6}', '${workout7}');`;

connection.query(sql, function(err, results) {
  if (err) {
    console.log('error querying database: ', err);
  } else {
    console.log('template saved!');
  }

});

    }
  })

}

const getTemplates = function(data, callback) {

connection.connect((err) => {
  if(err) {
    console.log('error connecting to database: ', err);
      return;
  } else {

    var name = data.slice(2, data.length - 5);
    var sql = `select * from templates where name = '${name.toUpperCase()}'`;
    connection.query(sql, function(err, results) {
      if (err) {
       console.log('error ! ! !: ', err);
      } else {
        callback(results);
      }
    });

  }
})
}

const createAccount = function(data, callback) {

  connection.connect((err) => {
    if(err) {
      console.log('error connecting to database: ', err);
        return;
    } else {
      const dataSplit = data.split(',')
      var name = dataSplit[0].slice(2).toUpperCase();
      var password = dataSplit[1].slice(0, dataSplit[1].length - 5);

      var sql = `select * from usersAndPasses where name = '${name}'`;
      connection.query(sql, function(err, results) {
        if (err) {
         console.log('error ! ! !: ', err);
        } else {
          if (results.length === 0) {

            var sql = `insert into usersAndPasses values ('${name}', '${password}')`
            connection.query(sql, function(err, results) {
              if (err) {
               console.log('error ! ! !: ', err);
              } else {
                callback(results);
                }
              }
            );

          } else {
            callback('0');
          }
        }
      });

  }
  })


  }


  const attemptLogin = function(data, callback) {

    connection.connect((err) => {
      if(err) {
        console.log('error connecting to database: ', err);
          return;
      } else {
        const dataSplit = data.split(',')
        var name = dataSplit[0].slice(2).toUpperCase();
        var password = dataSplit[1].slice(0, dataSplit[1].length - 5);

        var sql = `select * from usersAndPasses where name = '${name}' and password = '${password}';`
        connection.query(sql, function(err, res) {
          if (err) {
           console.log('error ! ! !: ', err);
          } else {
            callback(res);
            }
          });


    }
    })


    }

    const deleteTemplate = function(data, callback) {
var dataSplit = JSON.stringify(data).split(',');

      connection.connect((err) => {
        if(err) {
          console.log('error connecting to database: ', err);
            return;
        } else {


console.log(dataSplit);
const name = dataSplit[1].slice(0, dataSplit[1].length - 5);
const template = dataSplit[0].slice(4, dataSplit[0].length - 2);
console.log(name, template)


          var sql = `delete from templates where templateName = '${JSON.stringify(template)}' and name = '${name}';`
          connection.query(sql, function(err, res) {
            if (err) {
             console.log('error ! ! !: ', err);
            } else {
              callback(res);
              }
            });
      }
      })

    }



    const changeColor = function(data, callback) {

      connection.connect((err) => {
        if(err) {
          console.log('error connecting to database: ', err);
            return;
        } else {

          const dataSplit = JSON.stringify(data).split(',')

var templateName = dataSplit[0].slice(4, dataSplit[0].length - 2);
var color = dataSplit[1].slice(0, dataSplit[1].length - 5);



          var sql = `update templates set color = '${color}' where templateName = '"${templateName}"';`
          connection.query(sql, function(err, res) {
            if (err) {
             console.log('error ! ! !: ', err);
            } else {
              callback(res);
              }
            });

            var sql2 = `update workout1 set color = '${color}' where workoutPlan = '"${templateName}"';`
            connection.query(sql2, function(err, res) {
              if (err) {
               console.log('error ! ! !: ', err);
              }
              });


      }
      })


      }

module.exports.saveWorkout = saveWorkout;
module.exports.getWorkouts = getWorkouts;
module.exports.addTemplate = addTemplate;
module.exports.getTemplates = getTemplates;
module.exports.createAccount = createAccount;
module.exports.attemptLogin = attemptLogin;
module.exports.deleteTemplate = deleteTemplate;
module.exports.changeColor = changeColor;

