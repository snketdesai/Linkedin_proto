/**
 * New node file
 */

var job = require('../model/jobQueries');

exports.getJobsByCompany = function(req,res){
	
	var companyId = req.params.companyId;
	job.getJobsByCompanyId(companyId,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while fetching data\n");
		}
		else{
			
			res.send(data);
			
		}
	});
}

exports.getJobDetails = function(req,res){
	var companyId = req.params.companyId;
	var jobId = req.params.jobId;
	job.getJobDetails(companyId,jobId,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while fetching data\n");
		}
		else{
			
			res.send(data);
			
		}
	});
}

exports.getJobs = function(req,res){
	job.getAllJobs(function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while fetching data\n");
		}
		else{
			
			res.send(data);
			
		}
	});
}

exports.insertJobDetails = function(req,res){
	var companyId = req.params.companyId;
	var jobTitle= req.body.jobTitle;
	var jobDesc=req.body.jobDesc;
	var expiryDate=req.body.expiryDate;
	var location=req.body.location;
	job.insertJob(companyId,jobTitle,jobDesc,expiryDate,location,function(err,data){
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

exports.deleteJob = function(req,res){
	var jobId = req.params.jobId;
	job.deleteJob(jobId,function(err,data){
		if(err){
			  res.writeHead(400);
			  res.end("Error while deleting record\n");
		}
		else{		
			 res.writeHead(200);
			 res.end("Record Deleted successfully");
			
		}
	});
}
