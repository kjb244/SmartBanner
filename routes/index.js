var express = require('express');
var router = express.Router();
var jcrContent = require('../copy/testingcontent.json');


router.get('/', function(req, res, next){
	res.redirect('/testing');
});

/* GET home page. */
router.get('/testing', function(req, res, next) {
  res.render('index', jcrContent);
});

module.exports = router;
