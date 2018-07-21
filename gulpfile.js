const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest(''));
});

gulp.task('imageMin', function(){
    gulp.src('src/assets/*')
        .pipe(imageMin())
        .pipe(gulp.dest('assets'));
});

gulp.task('minify', function(){
    gulp.src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['copyHtml', 'imageMin', 'minify', 'sass']);

gulp.task('watch', function(){
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/assets/*', ['imageMin']);
    gulp.watch('src/js/*.js', ['minify']);
    gulp.watch(['src/sass/*.scss', 'src/sass/modules/*.scss', 'src/sass/partials/*.scss'], ['sass']);
});