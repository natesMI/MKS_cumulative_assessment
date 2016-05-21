var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var server = require( 'gulp-develop-server' );
 
gulp.task('lint', function() {
  return gulp.src('./client/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
 
gulp.task('compress', function() {
  return gulp.src('./client/app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

 
gulp.task('minify-css', function() {
  return gulp.src('./client/styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task( 'server:start', function() {
    server.listen( { path: './server.js' } );
});
 
gulp.task( 'server:restart', function() {
    gulp.watch( [ './client/app/**/*.js' ], server.restart );
});


gulp.task('default', ['lint', 'compress', 'minify-css', 'server:start', 'server:restart']);