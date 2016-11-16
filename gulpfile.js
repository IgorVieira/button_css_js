const gulp = require('gulp')
const sass = require('gulp-sass')







gulp.task('sass', function () {
 return gulp.src('./assets/sass/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('watch', () => {

      gulp.watch(['./assets/sass/**/*.scss'], ['sass'])
     
})


gulp.task('default', () =>  {
	gulp.start('watch');
});