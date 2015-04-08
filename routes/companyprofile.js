var dbConn = require('../model/dbConnection');
var db = dbConn.getDBconnection();
var uuid = require('node-uuid');
var fs = require("fs");
var cprofile = require('./companyprofile');

exports.getView = function(req,res){
	res.render('sample');
}

exports.getCompanyProfileView = function(req,res){
	res.render('companyprofile');
}

exports.getCompanyView = function(req,res){
	res.render('companyhomepage');
}

exports.getCompanyRegisterView = function(req,res){
	res.render('companydetailsregistration');
}

exports.getCompanyProfile = function(req,res){
	var companyId = req.params.companyId;
	db.table('companyprofile').having('companyId').eq(companyId).scan(
	function(err, data) {
		if(!err){
			res.status(200).json({data : data});
		}
	});
}

exports.insertCompanyProfile = function(req,res){	
	var companyId = uuid.v1();
	var companyName = req.body.name;
	var overview = req.body.overviewText;
	var url = req.body.urlText;
	
	db.table('companyprofile').insert({
		companyId : companyId,
		companyName : companyName,
		overview : overview,
		url : url,
		logo : null,
		numFollowers : 0,
		status : null
	},function(err,data) {
		if(err){
			console.log("Error: "+err);
			res.status(400).json({errmsg:err});
		}else{
			//console.log(data);
			res.status(200).json({msg:'insert success', companyId:companyId});
		}
    });
}

exports.changeCompanyLogo = function(req,res){
	console.log(req.body.cId);
	var companyId = req.params.companyId;
	fs.readFile(req.files.logo.path, function (err, data) {
	  fs.writeFile("./public/uploads/"+req.files.logo.name, data, function (err) {
		  cprofile.updateCompanyLogo(req, res, "./uploads/"+req.files.logo.name, companyId, req.body.cId);
	  });
	});
}

exports.updateCompanyLogo = function(req, res, path, companyId, redirectAction){
	db.table('companyprofile').where('companyId').eq(companyId).update({
		logo: path
	}, function( err, data ) {
		if(err){
			console.log( err );
			res.status(400).json({errmsg:err});
		}else{
			if(redirectAction === 'update'){
				res.redirect('/companyhomepage');
			}else{
				res.redirect('/');
			}
		}
	});
}

exports.updateCompanyName = function(req,res){
	var companyId = req.params.companyId;
	var name = req.body.name;
	
	db.table('companyprofile').where('companyId').eq(companyId).update({
		companyName : name
	}, function( err, data ) {
		if(err){
			console.log( err );
			res.status(400).json({errmsg:err});
		}else{
			//console.log( data );
			//res.status(200).json({msg:'update success'});
			res.redirect("/");
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