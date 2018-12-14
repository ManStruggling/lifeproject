
let gulp = require("gulp");
let uglify = require("gulp-uglify");//压缩模块
let babel = require("gulp-babel");//ES6转ES5编译模块
let sass = require("gulp-sass");//scss编译成css
let webserver = require("gulp-webserver");//搭建本地服务器

gulp.task("buildJS", function () {
    //复制第三方js文件到dist
    gulp.src("./src/scripts/libs/*.js")
        .pipe(gulp.dest("./dist/scripts/libs"))

    //编译压缩复制
    gulp.src("./src/scripts/*.js")
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/scripts"))
})

gulp.task("buildCSS", function () {
    //把scss编译成css再复制
    gulp.src("./src/**/*.scss").pipe( sass() ).pipe( gulp.dest("./dist") )
})

gulp.task("buildHTML", function () {
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"))
})

// 复制静态资源  ps：图片、字体等
gulp.task("buildStaticResource", () => {
    gulp.src("./src/static/**/*.*").pipe(gulp.dest("./dist/static"));
})

//监听：修改了文件，重新build对应文件
gulp.task("watching", function () {
    gulp.watch("./src/**/*.scss", ["buildCSS"]);
    gulp.watch("./src/**/*.js", ["buildJS"]);
    gulp.watch("./src/**/*.html", ["buildHTML"]);
})

gulp.task('webserver', ["watching"], function () {
    gulp.src("dist").pipe(webserver({ 
        livereload: true,//是否支持热部署
        https: true,      //
        proxies: [//服务器代理
            {
                source: '/GetPage_1',
                target: 'https://www.benlai.com/NewHome/GetOnlineHomePage'
            },
            {
                source: '/GetPage_2',
                target: 'https://www.benlai.com/NewHome/GetOnlineHomePage'
            },
            {
                source: '/GetPage_3',
                target: 'https://www.benlai.com/NewHome/GetOnlineHomePage'
            },
            {
                source: '/GetPage_4',
                target: 'https://www.benlai.com/NewHome/GetOnlineHomePage'
            }
        ]
    }))
})

gulp.task("build", ["buildJS", "buildHTML", "buildCSS", "buildStaticResource"])