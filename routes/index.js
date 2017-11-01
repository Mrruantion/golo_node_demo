var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req)
  res.render('index', {title:'文章列表'});
});

router.get('/index',function(req,res,next){
  res.render('index',{})
})
/* GET admin page. */
router.get('/admin', function(req, res, next) {
    res.render('admin', {title:'title'})
});

module.exports = router;