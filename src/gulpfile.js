var gulp        = require('gulp');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var cleanCss    = require('gulp-clean-css');
var sequence    = require('gulp-sequence');
var rename      = require('gulp-rename');
var bowerFiles  = require('main-bower-files');
var sourcemaps  = require('gulp-sourcemaps');
var stripper    = require('gulp-strip-debug');
var es          = require('event-stream');
var inj         = require('gulp-inject');
var copy        = require('gulp-copy');
var zip         = require('gulp-zip');
var gls         = require('./gulp.config.json');

var timeStamp   = (Math.floor(Date.now() / 1000));

// gulp.task('vendorJS', function() {
//     gulp.src([
//         './bower_components/angular/angular.js',
//         './bower_components/angular-route/angular-route.js',
//         './bower_components/angular-resource/angular-resource.js',
//         './bower_components/ngMask/dist/ngMask.js',
//         './bower_components/sp-manager/dist/sp-manager.js',
//         './bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
//         './bower_components/bootstrap/dist/js/bootstrap.js',
//         './bower_components/sweetalert/dist/sweetalert.min.js'
//     ])
//         .pipe(sourcemaps.init())
//         .pipe(concat('vendor-' + timeStamp + '.js'))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('./app/dist'))
// });

// gulp.task('vendorCSS', function () {
//     gulp.src([
//         './bower_components/animate.css/animate.css',
//         './bower_components/bootstrap/dist/css/bootstrap.css',
//         './bower_components/font-awesome/css/font-awesome.css',
//         './bower_components/sweetalert/dist/sweetalert.css'
//     ])
//         .pipe(concat('vendorCSS-' + timeStamp + '.css'))
//         .pipe(gulp.dest('./temp'))
//         .pipe(cleanCss())
//         .pipe(rename('vendor-' + timeStamp + '-min.css'))
//         .pipe(gulp.dest('./app/dist'))
// });

gulp.task('siteJS', function () {
    gulp.src([
        "./app/views/about/_module.js",
        './app/views/about/controllers/aboutCtrl.js',
        './app/views/contact/_module.js',
        './app/views/contact/controllers/contactCtrl.js',
        './app/views/home/_module.js',
        './app/views/home/controllers/homeCtrl.js',
        './app/views/layouts/footer/_module.js',
        './app/views/layouts/footer/footerCtrl.js',
        './app/views/layouts/navbar/_module.js',
        './app/views/layouts/navbar/controllers/navbarCtrl.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('siteJS-' + timeStamp + '.js'))
        .pipe(gulp.dest('./temp'))
        .pipe(uglify())
        .pipe(rename('siteJS.min.js'))
        .pipe(rename('app-' + timeStamp + '-min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/dist'))
});

gulp.task('minCSS', function () {
    gulp.src('./app/styles/main.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCss())
        .pipe(rename('app-' + timeStamp + '-min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/dist'))
});

gulp.task('default', sequence([
    'siteJS',
    'minCSS'
]));

/** ================================================================================= */
/** Below here is for testing. Dont mix with the rest of the gulpfile */
/** ================================================================================= */

gulp.task('testINJ', function () {
    gulp.src('./app/index.html')
        .pipe(sourcemaps.init())
        .pipe(inj(gulp.src(
            './app/bower_components/jquery/dist/jquery.js',
            {read: false}), {starttag: '<!-- inject:head:js -->'}))
        .pipe(inj(gulp.src([
            './app/dist/*.js',
            './app/dist/app-*.js',
            './app/dist/app-*.css',
            '!./bower_components/jquery/dist/jquery.js'
        ], {read: false})))
        .pipe(gulp.dest('./app/dist'))
        .pipe(inj(gulp.src(bowerFiles(), {base: './app/bower_components'}, {read: false}), {name: 'bower'}))
        .pipe(inj(gulp.src(['./app/dist/bootstrap.css', './app/dist/font-awesome.css'], {read: false}), {name: 'bowerSecond'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('copy', function () {
     gulp.src('./app/bower_components/font-awesome/css/font-awesome.css')
        .pipe(copy('app/dist', { prefix: 4 }))
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('copy2', function () {
    gulp.src('./app/bower_components/bootstrap/dist/css/bootstrap.css')
        .pipe(copy('app/dist', { prefix: 5 }))
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('testDefault', sequence(['siteJS', 'minCSS'], ['copy', 'copy2'], ['testINJ']));

gulp.task('prod:build', sequence('testDefault', ['testINJ', 'archive']));

gulp.task('archive', function() {
    gulp.src('../src')
        .pipe(zip(timeStamp + '-' + 'resume.zip'))
        .pipe(gulp.dest('../../Portfolio'))
});
