const { Pool } = require('pg');
const mariadb = require("mariadb/callback");

const config =  {
user: 'root',
password: 'samaung1',
host: 'database-1.cscmgcicurmq.us-east-1.rds.amazonaws.com',
database: 'test',
port: 3306
};

var pool      =    mariadb.createPool({
  connectionLimit : 100000000000000000,
  host     : 'database-1.cscmgcicurmq.us-east-1.rds.amazonaws.com',
  user     : 'root',
  password : 'samaung1',
  database : 'test',
  debug    :  false
});


module.exports = {
config,
pool,
};

