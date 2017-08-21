var queryConstant = require('../../config/queries.js');
var tableName = 'employee';


var employeeSchema = {
	empId:'empId',
	empName:'empName',
	description:'description'
}

var extractObject = [];

buildQuery = (o) => {
	let i,query;
	extractObject = [];
	for (i in employeeSchema) {
		extractObject.push(o[employeeSchema[i]] || '');
	}
	return queryConstant.INSERT_EMPLOYEE(extractObject);
}

buildSelectQuery = () => {
	return queryConstant.SELECT_EMPLOYEE();
}

module.exports = { buildQuery: buildQuery, buildSelectQuery: buildSelectQuery };