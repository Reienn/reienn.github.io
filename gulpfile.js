const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');

gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest(''));
});

gulp.task('imagemin', function(){
    gulp.src('src/assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets'));
});

gulp.task('minify', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['copyHtml', 'imagemin', 'minify', 'sass']);