import gulp from 'gulp';
import imageMin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';

const sass = gulpSass(dartSass)

gulp.task('copyHtml', async function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('./'));
});

gulp.task('imageMin', async function(){
    gulp.src('src/assets/*')
        .pipe(imageMin())
        .pipe(gulp.dest('assets'));
});

gulp.task('minify', async function(){
    gulp.src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('sass', async function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('default', gulp.series('copyHtml', 'imageMin', 'minify', 'sass'));

gulp.task('watch', function(){
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/assets/*', ['imageMin']);
    gulp.watch('src/js/*.js', ['minify']);
    gulp.watch(['src/sass/*.scss', 'src/sass/modules/*.scss', 'src/sass/partials/*.scss'], ['sass']);
});