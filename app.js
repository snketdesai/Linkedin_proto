
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');

var http = require('http');
var path = require('path');
var profile = require('./routes/profile');
var job = require('./routes/jobs');
var user = require('./routes/users');
var companyprofile = require('./routes/companyprofile');
var index = require('./routes/index');
//var AWS = require('aws-sdk');
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

/*AWS.config.loadFromPath('./public/access.json');

var dd = new AWS.DynamoDB();

var attachDynamo = function(req,res,next){

	req.dynamo = dd;
	next();
}
*/
app.get('/',index.login);

app.post('/signUp',user.signUp);
app.post('/signIn',user.signIn);
app.post('/checkForExistingUser',user.IsUserPresent);

app.post('/bio/:userid',profile.insertBio)
//app.get('/bio/:userid',profile.getBio);

app.post('/certification/:userid',profile.insertCertification);
//app.get('/certification/:userid',profile.getCertification);

/*app.post('/college/:userid',profile.insertCollege);
app.get('/college/:userid',  profile.getCollege);

app.post('/skill/:userid',profile.insertSkill);
app.get('/skill/:userid', profile.getSkill);*/

app.get('/jobs',job.getJobs);
app.get('/company/:companyId/jobs',job.getJobsByCompany);
app.post('/company/:companyId/jobs/',job.insertJobDetails);
app.get('/company/:companyId/jobs/:jobId',job.getJobDetails);
app.delete('/company/:companyId/jobs/:jobId',job.deleteJob);

app.get('/sample', companyprofile.getView);

app.post('/company',companyprofile.insertCompanyProfile);
app.get('/company/:companyId',companyprofile.getCompanyProfile);
app.post('/company/:companyId/overview',companyprofile.updateCompanyOverview);
app.post('/company/:companyId/url',companyprofile.updateCompanyURL);
app.post('/company/:companyId/logo',companyprofile.updateCompanyLogo);
app.post('/company/:companyId/followers',companyprofile.addCompanyFollower);
app.post('/company/:companyId/status',companyprofile.updateCompanyStatus);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
