/*
*	default gulp task
*	build all website
*/
var gulp = require('gulp');

gulp.task('default', ['html', 'scss', 'js', 'image', 'favicon', 'json', 'cfp']);
