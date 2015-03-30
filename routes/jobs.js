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
