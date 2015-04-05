/**
 * New node file
 */

var user = require('../model/jobApplicationQueries');


exports.postJobApplication = function(req,res){
	console.log("Job Application has been called");
	var jobId = req.body.jobId;
	var userId = req.body.userId;
	var companyId = req.body.companyId;
	var status = req.body.status;
	var applicationDate = req.body.applicationDate;
	user.postJobApplication(jobId, userId, companyId, status, applicationDate,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while inserting data\n");
		}
		else{	
			res.writeHead(200);
			 res.end("Job application inserted successfully.");
		}
	});
}

exports.getJobApplication = function(req,res){
	console.log("Job Application requested");
	var userId = req.params.userId;
	user.getJobApplication(userId,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while getting your job application. \n");
		}
		else{	
			 console.log(data);
			 res.send(JSON.stringify(data));
		}
	});
}

exports.updateJobStatus = function(req,res){
	console.log("Job status update requested");
	var jobId = req.params.jobId;
	var userId = req.params.userId;
	var status = req.body.status;
	user.updateJobStatus(jobId, userId, status, function(err, data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while udating your job application status. \n");
		}else{
			res.writeHead(200);
			res.end("Execution Finished");
		}
	});
}