// 定义依赖项
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    named = require('vinyl-named'),
    webpack = require('gulp-webpack'),
    koader = require('imports-loader'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector');

//启动服务器
var webserver = require('gulp-webserver'),
    url = require("url"),
    fs = require("fs");

 
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      port:80,
      directoryListing: true,
      middleware:function(req,res,next)
      {
        var urlObj=url.parse(req.url,true);

        switch(urlObj.pathname)
        {
            case "/mock/data.php":
                res.setHeader("Content-type","data/json");
                fs.readFile("/mock/data.json","utf-8",function(data)
                {
                    res.end(data);
                })
            return;
        }
        next();
      }

    }));
});

//js模块
gulp.task('jsmodule',function()
{
    gulp.src('js/*.js')
        .pipe(named())
        .pipe(webpack({
            output:{
                filename:'[name].js'
            },
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'imports?define=>false'  
                }]                
            }
        }))
        .pipe(uglify().on("error",function(e)
        {
            console.log(e.lineNumber+","+e.message)
        }))
        .pipe(gulp.dest('app/prd/scripts'))
})

// 定义 html 任务
gulp.task('html', function() {
    gulp.src('./index.html')
        .pipe(gulp.dest('app'))
});

// 定义 watch 任务
gulp.task('watch', function() {
    gulp.watch("*.html",["html"]);
    gulp.watch("js/*.js",["jsmodule"]);
})

 
// 定义默认任务
gulp.task('default', ["html", 'webserver', 'watch']);
