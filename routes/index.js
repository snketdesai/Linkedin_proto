
/*
 * GET home page.
 */

exports.login = function(req, res){
  res.render('login');
};

exports.search = function(req, res){
	console.log("Search "+req.session.userId);
	res.render('search');
};