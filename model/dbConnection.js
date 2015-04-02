var mysql = require('mysql2');

var dynomoDb;
var pool;

var $credentials = {
	    "accessKeyId": "AKIAJRNCQQ3RPLJCQEQA", 
	    "secretAccessKey": "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", 
	    "region": "us-west-1"
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
			  host     : 'localhost',
			  user     : 'root',
			  password : 'welcome',
			  port : '3306',
			  database : 'busi_soc_net'
			});
		return pool;
	}
		
};
exports.getDBconnection = getDBconnection;