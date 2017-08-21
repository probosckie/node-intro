var mysql = require('mysql');
 var pool = mysql.createPool({
 	  host: '127.0.0.1',
 	  user: 'admin', 
 	  password: 'test', 
 	  database: 'employee_demo'
 });

 module.exports = pool;