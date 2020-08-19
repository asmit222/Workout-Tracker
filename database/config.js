const { Pool } = require('pg');
const mariadb = require("mariadb/callback");

const config =  {
user: 'b2f7b55503f0b9',
password: 'acec938e',
host: 'us-cdbr-east-02.cleardb.com',
database: 'heroku_1234d80025b881f',
port: 3306
};

// const pool = new Pool({
//   user: 'b2f7b55503f0b9',
//   host: 'us-cdbr-east-02.cleardb.com',
//   database: 'heroku_1234d80025b881f',
//   password: 'acec938e',
//   port: 3306
// })

var pool      =    mariadb.createPool({
  connectionLimit : 10,
  host     : 'us-cdbr-east-02.cleardb.com',
  user     : 'b2f7b55503f0b9',
  password : 'acec938e',
  database : 'heroku_1234d80025b881f',
  debug    :  false
});


module.exports = {
config,
pool,
};

