var express = require('express');
var router = express.Router();
var jcrContent = require('../copy/testingcontent.json');
let html = '';

router.get('/', function(req, res, next){
	res.redirect('/testing');
});

/* GET home page. */
router.get('/testing', function(req, res, next) {
  res.render('index', jcrContent);
});

router.post('/htmlcontent', function(req, res){
	html = req.body.html;
	res.render('pagehtml', {data1: html});
});

router.get('/testing2', function(req, res){
	console.log('here');
	res.render('pagehtml', {data1: html});
});

module.exports = router;
