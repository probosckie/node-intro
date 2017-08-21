const environment = process.env.NODE_ENV;
let tableNames = {};

if(environment === 'dev' || environment === 'qa'){
	tableNames["employee"] = "employee";
}

else if (environment === 'prod') {
	tableNames["employee"] = "employee";

}

else if (!environment){
	tableNames["employee"] = "employee";
}

module.exports = tableNames;