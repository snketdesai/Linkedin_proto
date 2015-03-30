/**
 * This files contains queries related to the jobs
 */

var dbConn = require('../model/dbConnection');

var db = dbConn.getDBconnection();

// Method to get all jobs from jobs table

exports.getAllJobs = function(callback){
	db
    .table('jobs')
    .scan(function( err, data ) {
        callback(err, data);
    })
}

//Method to get job by company Id

exports.getJobsByCompanyId = function(companyId,callback){
	db
    .table('jobs')
    .having('companyId').eq(companyId)
    .scan(function( err, data ) {
        callback(err, data);
    });
}

// Method to get job details by job id

exports.getJobDetails = function(companyId,jobId,callback){
	console.log("CompanyId__________-"+companyId);
	console.log("JobId__________"+jobId);

	db
    .table('jobs')
    .where('jobId').eq(Number(jobId))
    .get(function( err, data ) {
        console.log( err, data );
        callback(err, data);
    })
	
	
}