module.exports = function () {
    $.gulp.task('fonts', () => {
        
        return $.gulp.src(['./dev/static/fonts/**/*.*',
        				   './fontawesome/webfonts/**/*.*'])
            .pipe($.gulp.dest('./build/static/fonts/'));
    });
};

