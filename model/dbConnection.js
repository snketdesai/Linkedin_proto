var mysql = require('mysql2');
var AWS = require('aws-sdk');

var dynomoDb;
var pool;

var $credentials = {
		"accessKeyId": "AKIAJO4JY6EENEAGOB3A", 
		"secretAccessKey": "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", 
		"region": "us-west-1"
}

function getAWS_SDK(){
	AWS.config.loadFromPath('./public/access.json');

	var aws = new AWS.DynamoDB();
	
	return aws;
}




function getDBconnection(){
	if(dynomoDb){
		return dynomoDb;
	}
	else{
		var dynomoDb = require('aws-dynamodb')($credentials)
		return dynomoDb;
	}
	 
}


exports.getPoolInstance = function(){
	
	if(pool != null){
		return pool;
	}
	else
	{
		pool  = mysql.createPool({
				  host     : 'cmpe282rds.cckbiaous4u7.us-west-1.rds.amazonaws.com',
			  user     : 'CMPE282RDS',
			  password : '',
			  port : '3306',
			  database : 'busi_soc_net'

			});
		return pool;
	}
		
};
exports.getDBconnection = getDBconnection;
exports.getAWSConnection = getAWS_SDK;
