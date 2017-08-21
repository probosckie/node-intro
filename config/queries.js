var tableNames = require('../config/env.js');

module.exports = {
    'INSERT_EMPLOYEE': function(arr) {
			return 'INSERT INTO `'+tableNames.employee+'` (`empId`, `empName`, `description`) VALUES ("'+arr[0]+'","'+arr[1]+'", "'+arr[2]+'")';
		},
		'SELECT_EMPLOYEE': function() {
    	return 'SELECT `empId`, `empName`, `description` FROM `'+tableNames.employee+'`';
    }

}