var express = require('express')
var Blog = require('./_Blogsdata/blogs')

// 配置
var router = express.Router()

router.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OP0TIONS");
  res.header("X-Powered-By", "3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//
router.post('/add',function (req,res) {
  var Ablog = req.body
  console.log(Ablog);
  new Blog(Ablog).save().then(res => console.log(res));
  res.status(200)
})

router.get('/',function (req, res) {
  Blog.find(function (err, data) {
    if (err) {
      return res.status(200).json({
        err_code:500
      })
    }
    if (data === null ) {
      return  res.status(200).json({
        err_code:1
      })
    }else {
      req.blog = data
      return  res.status(200).json({
        err_code:0
      })
    }
  })
})
// 导出
module.exports = router
