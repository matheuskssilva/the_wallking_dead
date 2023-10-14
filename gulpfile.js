const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))



function compilaSass() {
    return gulp.src('./source/styles/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))
}



exports.sass = compilaSass
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', gulp.series(compilaSass))
}