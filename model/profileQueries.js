var dbConn = require('../model/dbConnection');


var db = dbConn.getDBconnection();

exports.updateBio = function(userid,bio,callback){
	
	db
	.table('user_profile')
	.where('userid').eq(userid)
	.insert_or_update({
		
		bio : bio
	},
	function(err,data) {
		console.log("Error______"+err);
		callback(err, data);
    });
},

exports.updateCertificate = function(userid,certificate,callback){
	
	db
	.table('user_profile')
	.where('userid').eq(userid)
	.insert_or_update({
		
		certificate : certificate
	},
	function(err,data) {
		console.log("Error______"+err);
		callback(err, data);
    });
}