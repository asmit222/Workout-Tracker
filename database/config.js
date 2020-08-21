const { Pool } = require('pg');
const mariadb = require("mariadb/callback");

const config =  {
user: 'b9cf24c448af3c',
password: '9a5204d2',
host: 'us-cdbr-east-02.cleardb.com',
database: 'heroku_48dcf701ba22c78',
port: 3306
};

var pool      =    mariadb.createPool({
  connectionLimit : 10,
  host     : 'us-cdbr-east-02.cleardb.com',
  user     : 'b9cf24c448af3c',
  password : '9a5204d2',
  database : 'heroku_48dcf701ba22c78',
  debug    :  false
});


module.exports = {
config,
pool,
};

