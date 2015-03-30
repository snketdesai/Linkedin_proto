var dynomoDb;

var $credentials = {
	    "accessKeyId": "xyz", 
	    "secretAccessKey": "xyz", 
	    "region": "us-west-1"
}



function getDBconnection(){
	if(dynomoDb){
		console.log("If");
		return dynomoDb;
	}
	else{
		console.log("else");
		var dynomoDb = require('aws-dynamodb')($credentials)
		return dynomoDb;
	}
	 
}

exports.getDBconnection = getDBconnection;