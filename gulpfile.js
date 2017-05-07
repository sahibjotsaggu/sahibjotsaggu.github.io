var gulp = require('gulp');
var sass = require('gulp-sass');
var bSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(bSync.reload({
			stream: true
		}));
});

gulp.task('images', function() {
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  	.pipe(gulp.dest('dist/fonts'));
});

gulp.task('images_for_gh', function() {
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest('images'));
});

gulp.task('fonts_for_gh', function() {
  return gulp.src('app/fonts/**/*')
  	.pipe(gulp.dest('fonts'));
});

gulp.task('bSync', function() {
	bSync.init({
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('useref', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		// Minifies only if it's a js file
		.pipe(gulpIf('*.js', uglify()))
		// Minifies only if it's a css file
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('cache:clear', function (callback) {
	return cache.clearAll(callback);
});

gulp.task('useref_for_gh', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		// Minifies only if it's a js file
		.pipe(gulpIf('*.js', uglify()))
		// Minifies only if it's a css file
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest(''));
});

gulp.task('build_for_gh', function(callback) {
	runSequence('useref_for_gh', 'images_for_gh', 'fonts_for_gh', callback);
});

// run 'bSync' task before running the watch tasks
gulp.task('watch', ['bSync', 'sass'], function() {
	// watch the scss folder for any changes in the scss files and run the 'sass' task
	gulp.watch('app/scss/*.scss', ['sass']);
	// watch the app folder for any changes to any .html files and reload the browser
	gulp.watch('app/*.html', bSync.reload);
	// watch the app/js folder for any changes to any .js files and reload the browser
	gulp.watch('app/js/**/*.js', bSync.reload);

});

gulp.task('default', function(callback) {
	runSequence(['sass', 'bSync', 'watch'], callback);
});

gulp.task('build', function(callback) {
	runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'], callback);
});
