
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');

var http = require('http');
var path = require('path');
var profile = require('./routes/profile');
var job = require('./routes/jobs');
var AWS = require('aws-sdk');
var events = require('events');
var EventEmitter = events.EventEmitter;
var bodyParser = require('body-parser');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

AWS.config.loadFromPath('./public/access.json');

var dd = new AWS.DynamoDB();

var attachDynamo = function(req,res,next){

	req.dynamo = dd;
	next();
}


app.post('/bio',attachDynamo,profile.insertBio)
app.get('/bio/:userid',attachDynamo,profile.getBio);

app.post('/certification', attachDynamo, profile.insertCertification);
app.get('/certification/:userid',attachDynamo,profile.getCertification);

app.post('/college', attachDynamo, profile.insertCollege);
app.get('/college/:userid', attachDynamo, profile.getCollege);

app.post('/skill', attachDynamo, profile.insertSkill);
app.get('/skill/:userid', attachDynamo, profile.getSkill);

app.get('/jobs',job.getJobs);
app.get('/company/:companyId/jobs',job.getJobsByCompany);
app.get('/company/:companyId/jobs/:jobId',job.getJobDetails)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
