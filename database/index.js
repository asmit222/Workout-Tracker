const mariadb = require("mariadb/callback");
const mariadbConfig = require("./config.js");
const { Pool } = require('pg');

// const connection = mariadb.createConnection(mariadbConfig.config);

const saveWorkout = function(data, callback) {


  mariadbConfig.pool.getConnection(function(err, conn) {
    if(err) {
      conn.release();
      console.log(err);
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


        var sql = `INSERT INTO workout1 VALUES ('${name}', '${day}', '${date}', '${workout1}', '${workout2}', '${workout3}', '${workout4}', '${workout5}', '${workout6}', '${workout7}', '${notes}');`;

        conn.query(sql, function(err, results) {
          conn.release();
          if (err) {
           console.log('error!: ', err);
          } else {
            console.log('workout saved!');
          }

        });
      }
    })



};

const getWorkouts = function (data, callback) {

mariadbConfig.pool.getConnection(function(err, conn) {
  if(err) {
    conn.release();
    console.log(err);
  } else {

    var name = data.slice(2, data.length - 5);
    var sql = `select * from workout1 where name = '${name.toUpperCase()}'`;
    conn.query(sql, function(err, results) {
      conn.release();
      if (err) {
       console.log('error ! ! !: ', err);
      } else {
        console.log('connected!!!!')
        callback(results);
      }
    });

  }
})

}

const addTemplate = function (data, callback) {




  mariadbConfig.pool.getConnection(function(err, conn) {
    if(err) {
      conn.release();
      console.log(err);
    } else {
var dataSplit = data.split(',');
console.log(dataSplit);
var workout1 = [dataSplit[0].slice(2), dataSplit[1], dataSplit[2]];
var workout2 = [dataSplit[3], dataSplit[4], dataSplit[5]];
var workout3 = [dataSplit[6], dataSplit[7], dataSplit[8]];
var workout4 = [dataSplit[9], dataSplit[10], dataSplit[11]];
var workout5 = [dataSplit[12], dataSplit[13], dataSplit[14]];
var workout6 = [dataSplit[15], dataSplit[16], dataSplit[17]];
var workout7 = [dataSplit[18], dataSplit[19], dataSplit[20]];

var name = dataSplit[22];
var workoutName = JSON.stringify(dataSplit[24].slice(0, dataSplit[24].length - 5));

console.log(name, workoutName);


      // var name = data.slice(2, data.length - 5);
      // var sql = `select * from workout1 where name = '${name.toUpperCase()}'`;
      // conn.query(sql, function(err, results) {
      //   conn.release();
      //   if (err) {
      //    console.log('error ! ! !: ', err);
      //   } else {
      //     console.log('connected!!!!')
      //     callback(results);
      //   }
      // });

    }
  })



}

// const checkUser = function (data, callback) {

//   mariadbConfig.pool.getConnection(function(err, conn) {
//     if(err) {
//       conn.release();
//       console.log(err);
//     } else {

//       var dataSplit = data.split(',')
//       var username = dataSplit[0].slice(2);
//       var password = dataSplit[1].slice(0, dataSplit[1].length-5);

//       var sql = `select * from usersAndPasses where name = '${username}'`;
//       pool.query(sql, function(err, results) {
//         if (err) {
//          console.log('error ! ! !: ', err);
//         } else {
//           callback(results, username, password);
//         }

//       });

//     }
//   })

// }

// module.exports.checkUser = checkUser;
module.exports.saveWorkout = saveWorkout;
module.exports.getWorkouts = getWorkouts;
module.exports.addTemplate = addTemplate;

