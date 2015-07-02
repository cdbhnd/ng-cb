var gulp = require('gulp');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglifyjs');

gulp.task('concat_services', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('cb.components.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat_services_uglified', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('cb.components.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', [
    'concat_services',
    'concat_services_uglified'
]);

gulp.task('default', function(callback) {
    runSequence('build', callback);
});
