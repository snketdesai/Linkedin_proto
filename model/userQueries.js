/**
 * User Related Queries
 */
var conn = require('../model/dbConnection');
var pool = conn.getPoolInstance();

exports.signUp = function(email, password, firstName, lastName,userType, callback) {

	var query = "insert into users "
			+ "(firstname,lastname,email,password,user_type)"
			+ "values (?,?,?,?,?);";
	pool.getConnection(function(err, connection) {
		connection.query(query, [ firstName, lastName, email, password,userType],
				function(regerr, rows) {

					if (regerr) {
						console.log("Error regiter user : " + regerr);
					} else {
						connection.release();
						callback(regerr, rows);
					}
				});
	});

}


exports.signIn = function(userName, password, callback) {

	console.log("USERNAME: " + userName + " Password: " + password);
	var sql = 'SELECT firstname,lastname,user_Id FROM users where email = ? and password = ?';
	console.log(sql);
	pool.getConnection(function(err, connection) {
		connection.query(sql, [ userName, password ], function(err, rows) {
			console.log(rows);
			if (rows.length !== 0) {
				callback(err, rows);

			} else {
				console.log("no user with this credentials");
				callback(err, rows);
			}
		});

	});
}


exports.searchUsers = function(firstName, lastName, callback) {

	console.log(" userId: " + userId);
	var sql = 'SELECT firstname, lastname FROM users where firstname = ? and lastname = ?';
	console.log(sql);
	pool.getConnection(function(err, connection) {
		connection.query(sql, [ firstName, lastName ], function(err, rows) {
			console.log(rows);
			if (rows.length !== 0) {
				callback(err, rows);

			} else {
				console.log("no users exist with these search parameters");
				callback(err, rows);
			}
		});

	});
}

exports.isUserPresent = function(email,callback){
	
	var queryusername="select email from users where email = ?";
	pool.getConnection(function(err, connection) {
		  connection.query( queryusername,[email], function(err, rows) {
		    connection.release();
		    if(err){
		    	console.log("Error check username available : "+err);
		    }
		    else{
		    	console.log(rows);
		    	var isunique = false;
		    	if(rows.length > 0){
		    		 isunique = true;    		
		    	}
		    	 callback(err,isunique);
		    }
		  }); 
		}); 
}
