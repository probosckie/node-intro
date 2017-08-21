
var pool = require('../../config/database.js');
var Q = require('q');
var query = require('../../config/queries.js');

var employee = require('../models/employee');


var openPositions = require('../models/openPositions.js');



exports.main = (req, res) =>  {
	res.render('main.ejs',  {error:"some val"});
}

exports.getData = (req, res) =>  {
	/*var x = {"name":"Prabhas"};
	res.send(JSON.stringify(x));*/

	pool.getConnection((err, connection) => {
				function queryEmployee(){
		      var defered = Q.defer();
		      connection.query(employee.buildSelectQuery(),defered.makeNodeResolver());
		      return defered.promise;
		    }

		    Q.all([queryEmployee(),]).then((results) => {
		      connection.release();
		      if(err) {
		        console.log(err);
		        res.end();
		      }
		      else {
		        res.send(JSON.stringify(results[0][0]));
		      }
		    });
		});
}

exports.setData = (req,res) => {
	var payload = req.body;

	pool.getConnection((err, connection) => {
				function queryEmp(){
		      var defered = Q.defer();
		      connection.query(employee.buildQuery(payload),defered.makeNodeResolver());
		      return defered.promise;
		    }

		    Q.all([queryEmp()]).then((results) => {
		      connection.release();
		      if(err) {
		        console.log(err);
		        res.end();
		      }
		      else {
		        res.send('insert happened');
		      }
		    });
		});
}