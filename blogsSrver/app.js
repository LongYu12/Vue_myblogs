var express =require('express')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')


//全局变量
var port = 8085

var app = express()


//公开资源配置
//path.join(__dirname, 'public')提供给express.static函数相对于启动node过程。如果从另一个目录运行Express应用程序，则使用要服务的目录的绝对路径更安全：
app.use('/public',express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname,'./node_modules/')))

// 配置模板引擎
// 告诉express框架，当渲染后缀为.html的模板时，使用express-art-template
app.engine('html', require('express-art-template'));

// 配置解析表单 POST 请求提插件
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//给 views 配置一个绝对路径更安全 默认视图页面在 views 下
app.set('views',path.join(__dirname,'./views/'))

// app.all("*", function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OP0TIONS");
//   res.header("X-Powered-By", "3.2.1");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

//路由
app.use(router)


app.listen(port, function () {
  console.log('runtime... http://127.0.0.1:8085');
})
