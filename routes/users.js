/**
 * New node file
 */

var user = require('../model/userQueries');

exports.signUp = function(req,res){
	console.log("Sign up called");
	var firstName;
	var lastName;
	var email = req.body.email;
	var pwd = req.body.password;
	var userType = req.body.userType;
	
	if(userType == 'C'){
		firstName  = req.body.companyName;
		lastName = firstName;
	}
	else{
		firstName = req.body.firstName;
		lastName = req.body.lastName;
	}
	user.signUp(email, pwd, firstName, lastName,userType,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while inserting data\n");
		}
		else{	
			 res.render("homepage");
		}
	});
}

exports.signIn = function(req,res){
	console.log("Sign In called");
	var email = req.body.username;
	var pwd = req.body.password;
	user.signIn(email, pwd,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while signing \n");
		}
		else{	
			if(data.lenth != 0){
				res.render('homepage');
			}
			else{
				res.render('login');
			}
			
		}
	});
}

exports.searchUsers = function(req,res){
	console.log("searching for the user");
	var firstName = req.params.firstName;
	var lastName = req.params.lastName;
	user.searchUser(firstName, lastName, function(err,data){
		if(err){
			res.writeHead(400);
			res.end("Error while signing");
		}else{
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