var config = require('./_config.js');

var gulp = require('gulp');
var browsersSync = require('browser-sync');

gulp.task('debug' , ['html', 'scss-debug', 'js-debug', 'image', 'favicon', 'json', 'cfp'] , function() {
	var reload = browsersSync.reload;
	browsersSync({
		server: {
			baseDir: './build/'
		}
	});

	gulp.watch(config.html.watch, ['html', reload]);
	gulp.watch(config.js.watch, ['js-debug', reload]);
	gulp.watch(config.scss.watch, ['scss-debug', reload]);
	gulp.watch(config.image.watch, ['image', reload]);
	gulp.watch(config.favicon.watch, ['favicon', reload]);
	gulp.watch(config.favicon.watch, ['json', reload]);
	gulp.watch(config.cfp.watch, ['cfp', reload]);
});
