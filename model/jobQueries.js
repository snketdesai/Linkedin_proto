/**
 * This files contains queries related to the jobs
 */

var dbConn = require('../model/dbConnection');
var uuid = require('node-uuid');

var db = dbConn.getDBconnection();

// Method to get all jobs from jobs table

exports.getAllJobs = function(callback) {
	db.table('jobs').scan(function(err, data) {
		callback(err, data);
	})
},

// Method to get job by company Id

exports.getJobsByCompanyId = function(companyId, callback) {
	db.table('jobs').having('companyId').eq(companyId).scan(
			function(err, data) {
				callback(err, data);
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

exports.insertJob = function(companyId, jobTitle, jobDesc, expiryDate,
		location, callback) {
	var jobId = uuid.v1();
	db
	.table('jobs')
	.insert({
		jobId : jobId,
		companyId : companyId,
		jobTitle : jobTitle,
		location : location,
		jobDescription : jobDesc,
		expiryDate : expiryDate
	},function(err,data) {
		console.log("Error______"+err);
		callback( err, data );
    });
}

//Method to delete job

exports.deleteJob = function(jobId,callback){
	db
	.table('jobs')
	.where('jobId').eq(jobId)
	.delete(function(err,data){
		callback(err,data);
	});
}