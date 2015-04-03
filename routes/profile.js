
// bio insert and get methods start here.............................

var profile = require('../model/profileQueries');

exports.insertBio = function(req,res){
	var userid = req.params.userid;
	var bio = req.body;
	
	profile.updateBio(userid,bio,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while inserting data\n");
		}
		else{		
			 res.writeHead(200);
			 res.end("Record Inserted successfully");
			
		}
	});
},

exports.insertCertification = function(req,res){
	var userid = req.params.userid;
	var certification = req.body;
	
	profile.updateCertification(certification,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while inserting data\n");
		}
		else{		
			 res.writeHead(200);
			 res.end("Record Inserted successfully");
			
		}
	});
}

/*exports.insertSkill = function(req,res){
	var userid = req.params.userid;
	var skill = req.body;
	
	profile.updateSkill(skill,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while inserting data\n");
		}
		else{		
			 res.writeHead(200);
			 res.end("Record Inserted successfully");
			
		}
	});
},

exports.insertCollege = function(req,res){
	var userid = req.params.userid;
	var college = req.body;
	
	profile.updateCollege(college,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while inserting data\n");
		}
		else{		
			 res.writeHead(200);
			 res.end("Record Inserted successfully");
			
		}
	});
}
*/

/*exports.insertBio = function(req,res){
	var dynamo = req.dynamo;
	var body = req.body;
	
	dynamo.updateItem(
		    {"TableName":"user_profile",
		        "Key":{
		            "user_id":{"S":body.user_id}
		              
		        },
		        "AttributeUpdates":{
		        	"bio":{
		        		"Value" :{
		        			"S":body.bio
		        		},
		        	
		        	"Action":"PUT"
		        	}
		        }
		    }, function(err,data) {
		    	if(err)
		    		res.send(err);
		        res.send(data);
		});
	
	
},

exports.getBio = function(req,res){
	var dynamo = req.dynamo;
	var userid = req.params.userid;
	
	console.log(userid);
	console.log(userid);
	
	dynamo.getItem({
		"Key":{ 
		      "user_id" : {
		          "S" : userid
		        }
		},
		"AttributesToGet":[
			"bio"
		],
		"TableName":"user_profile"	
		},function(err,data){
			if (err) {
			      res.send(err);
			      } 
			    else {
			   
			    	console.log(data);
			    	res.send(data);
			    	
			      }
	})
},

// bio insert and get methods end here ...................................

// Certification insert and get methods start here ..................................

exports.insertCertification = function(req,res){
	var dynamo = req.dynamo;
	var body = req.body;
	
	dynamo.updateItem(
		    {"TableName":"user_profile",
		        "Key":{
		            "user_id":{"S":body.user_id}
		              
		        },
		        "AttributeUpdates":{
		        	"certification":{
		        		"Value" :{
		        			"SS":body.certification
		        		},
		        	
		        	"Action":"ADD"
		        	}
		        }
		    }, function(err,data) {
		    	if(err)
		    		res.send(err);
		        res.send(data);
		});
	
},

exports.getCertification = function(req,res){
	var dynamo = req.dynamo;
	var userid = req.params.userid;
	
	
	dynamo.getItem({
		"Key":{ 
		      "user_id" : {
		          "S" : userid
		        }
		},
		"AttributesToGet":[
			"certification"
		],
		"TableName":"user_profile"	
		},function(err,data){
			if (err) {
			      res.send(err);
			      } 
			    else {
			   
			    	console.log(data);
			    	res.send(data);
			    	
			      }
	})
},

//end of certification methods .....................................

//start of college methods.........................................

exports.insertCollege = function(req,res){
	var dynamo = req.dynamo;
	var body = req.body;
	
	dynamo.updateItem(
		    {"TableName":"user_profile",
		        "Key":{
		            "user_id":{"S":body.user_id}
		              
		        },
		        "AttributeUpdates":{
		        	"college":{
		        		"Value" :{
		        			"SS":body.college
		        		},
		        	
		        	"Action":"ADD"
		        	}
		        }
		    }, function(err,data) {
		    	if(err)
		    		res.send(err);
		        res.send(data);
		});
	
},

exports.getCollege = function(req,res){
	var dynamo = req.dynamo;
	var userid = req.params.userid;
	
	
	dynamo.getItem({
		"Key":{ 
		      "user_id" : {
		          "S" : userid
		        }
		},
		"AttributesToGet":[
			"college"
		],
		"TableName":"user_profile"	
		},function(err,data){
			if (err) {
			      res.send(err);
			      } 
			    else {
			   
			    	console.log(data);
			    	res.send(data);
			    	
			      }
	})
},

// end of college methods.................................................

//start of skills methods..................................................

exports.insertSkill = function(req,res){
	var dynamo = req.dynamo;
	var body = req.body;
	
	dynamo.updateItem(
		    {"TableName":"user_profile",
		        "Key":{
		            "user_id":{"S":body.user_id}
		              
		        },
		        "AttributeUpdates":{
		        	"skill":{
		        		"Value" :{
		        			"SS":body.skill
		        		},
		        	
		        	"Action":"ADD"
		        	}
		        }
		    }, function(err,data) {
		    	if(err)
		    		res.send(err);
		        res.send(data);
		});
	
},

exports.getSkill = function(req,res){
	var dynamo = req.dynamo;
	var userid = req.params.userid;
	
	
	dynamo.getItem({
		"Key":{ 
		      "user_id" : {
		          "S" : userid
		        }
		},
		"AttributesToGet":[
			"skill"
		],
		"TableName":"user_profile"	
		},function(err,data){
			if (err) {
			      res.send(err);
			      } 
			    else {
			   
			    	console.log(data);
			    	res.send(data);
			    	
			      }
	})
}*/
//end of skills methods ....................................................