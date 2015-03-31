/**
 * New node file
 */

var user = require('../model/userQueries');

exports.signUp = function(req,res){
	console.log("Sign up called");
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var email = req.body.email;
	var pwd = req.body.pwd;
	user.signUp(email, pwd, firstName, lastName,'U',function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while inserting data\n");
		}
		else{	
			res.writeHead(200);
			 res.end("User created successfully.");
		}
	});
}

exports.signIn = function(req,res){
	console.log("Sign In called");
	var email = req.body.email;
	var pwd = req.body.pwd;
	user.signIn(email, pwd,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while signing \n");
		}
		else{	
			
			 res.send(data);
		}
	});
}

exports.IsUserPresent = function(req,res){
	console.log("___________IsUserPresent called_____________");
	var email = req.body.email;
	user.isUserPresent(email,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while checking unique user \n");
		}
		else{			
			 res.send(data);
		}
	});
}