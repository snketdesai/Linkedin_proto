var dbConn = require('../model/dbConnection');
var db = dbConn.getDBconnection();
var uuid = require('node-uuid');

exports.getView = function(req,res){
	res.render('sample');
}

exports.getCompanyProfile = function(req,res){
	var companyId = req.params.companyId;
	
	db.table('companyprofile').having('companyId').eq(companyId).scan(
	function(err, data) {
		if(!err){
			console.log(data);
			res.status(200).json({data : data});
		}
	});
}

exports.insertCompanyProfile = function(req,res){
	var companyId = uuid.v1();
	var companyName = req.body.companyName;
	var overview = req.body.overview;
	var url = req.body.url;
	var logo = req.body.logo;
	
	db.table('companyprofile').insert({
		companyId : companyId,
		companyName : companyName,
		overview : overview,
		url : url,
		logo : logo,
		numFollowers : 0,
		status : null
	},function(err,data) {
		if(err){
			console.log("Error: "+err);
			res.status(400).json({errmsg:err});
		}else{
			console.log(data);
			res.status(200).json({msg:'insert success', companyId:companyId});
		}
    });
}

exports.updateCompanyOverview = function(req,res){
	var companyId = req.params.companyId;
	var overview = req.body.overview;
	
	db.table('companyprofile').where('companyId').eq(companyId).update({
		overview: overview
	}, function( err, data ) {
		if(err){
			console.log( err );
			res.status(400).json({errmsg:err});
		}else{
			console.log( data );
			res.status(200).json({msg:'update success'});
		}
	});
}

exports.updateCompanyURL = function(req,res){
	var companyId = req.params.companyId;
	var url = req.body.urlO;
	
	db.table('companyprofile').where('companyId').eq(companyId).update({
		url: url
	}, function( err, data ) {
		if(err){
			console.log( err );
			res.status(400).json({errmsg:err});
		}else{
			console.log( data );
			res.status(200).json({msg:'update success'});
		}
	});
}

exports.updateCompanyLogo = function(req,res){
	var companyId = req.params.companyId;
	var logo = req.body.logo;
	
	db.table('companyprofile').where('companyId').eq(companyId).update({
		logo: logo
	}, function( err, data ) {
		if(err){
			console.log( err );
			res.status(400).json({errmsg:err});
		}else{
			console.log( data );
			res.status(200).json({msg:'update success'});
		}
	});
}

exports.addCompanyFollower = function(req,res){
	var companyId = req.params.companyId;
	
	db.table('companyprofile').where('companyId').eq(companyId).increment({
		numFollowers : 1
    }, function( err, data ) {
    	if(err){
			console.log( err );
			res.status(400).json({errmsg:err});
		}else{
			console.log( data );
			res.status(200).json({msg:'follower added'});
		}
    })
}

exports.updateCompanyStatus = function(req,res){
	var companyId = req.params.companyId;
	var status = req.body.status;
	
	db.table('companyprofile').where('companyId').eq(companyId).update({
		status: status
	}, function( err, data ) {
		if(err){
			console.log( err );
			res.status(400).json({errmsg:err});
		}else{
			console.log( data );
			res.status(200).json({msg:'update success'});
		}
	});
}