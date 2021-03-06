/**
 * This files contains queries related to the jobs
 */

var dbConn = require('../model/dbConnection');
var uuid = require('node-uuid');
var redis = require("redis");
var client = redis.createClient(6379,"127.0.0.1");

var db = dbConn.getDBconnection();

// Method to get all jobs from jobs table

exports.getAllJobs = function(callback) {
	db.table('jobs').scan(function(err, data) {
		var jobs = [];
		var j = 0;
		for(var i=0;i<data.length;i++){
			console.log(data[i].expiryDate);
			var exDate = new Date(data[i].expiryDate);
			var todayDate = new Date();
			if(todayDate <= exDate){
				jobs[j] = data[i];
				j++;
			}
		}	
		callback(err, jobs);
	});
}

// Method to get job by company Id

exports.getJobsByCompanyId = function(companyId, callback) {
	db.table('jobs').having('companyId').eq(companyId).scan(
			function(err, data) {
				var jobs = [];
				var j = 0;
				for(var i=0;i<data.length;i++){
					console.log(data[i].expiryDate);
					var exDate = new Date(data[i].expiryDate);
					var todayDate = new Date();
					if(todayDate <= exDate){
						jobs[j] = data[i];
						j++;
					}
				}	
				callback(err, jobs);
			});
}

// Method to get job details by job id

exports.getJobDetails = function(jobId, callback) {
	console.log("JobId__________" + jobId);

	db.table('jobs').where('jobId').eq(jobId).get(function(err, data) {
		console.log(err, data);
		callback(err, data);
	});
}

// Method to insert Job

exports.insertJob = function(companyId,companyName, jobTitle, jobDesc, expiryDate,
		location, callback) {
	var jobId = uuid.v1();
	db
	.table('jobs')
	.insert({
		jobId : jobId,
		companyId : companyId,
		companyName : companyName,
		jobTitle : jobTitle,
		location : location,
		jobDescription : jobDesc,
		expiryDate : expiryDate
	},function(err,data) {
		if(err){
			console.log("Error______"+err);
		}
		else{
			var jsonObj = {jobId : jobId, companyName : companyName,jobTitle : jobTitle, location : location,expiryDate : expiryDate};
			console.log("Json Obj_____"+JSON.stringify(jsonObj));
			var jobObj = JSON.stringify(jsonObj);
			client.sadd(companyName, jobObj);
			client.sadd(jobTitle, jobObj);
			client.sadd(location,jobObj);
		}
		callback( err, data );
    });
}

// Method to delete job

exports.deleteJob = function(jobId,callback){
	db
	.table('jobs')
	.where('jobId').eq(jobId)
	.delete(function(err,data){
		callback(err,data);
	});
}

// Method to search Job

exports.searchJobs = function(searchTerm,callback){
	var key = "*"+searchTerm+"*";
	console.log("Key_________"+key);
	client.keys(key, function (err, all_keys) {
	   var jobs = [];
	    var i =0;
	    all_keys.forEach(function (key, pos) { // use second arg of forEach to get pos
												
	        client.smembers(key, function (err, member) {
	        	if(err){
	        		 callback(err,jobs);
	        	}else{
	        		for(j=0;j<member.length;j++){
		            	console.log("Job ID_____"+member[j]);
		            	var obj = JSON.parse(member[j]);
		            	var exDate = new Date(obj.expiryDate);
						var todayDate = new Date();
						if(todayDate <= exDate){
							jobs[i] = obj;
							i++;
						}		
		            }
		            if(pos == all_keys.length - 1){
		            	 console.log(jobs);
		            	 callback(err,jobs);
		            }
	        	}
	            
	        });
	       
	    });
	});
}