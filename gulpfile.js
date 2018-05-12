const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const source = {
    view: 'index.html',
    js: 'dist/js/**/*.js',
    sass: 'src/sass/**/*.scss',
    sassMain: 'src/sass/main.scss'
};

const dest = {
    css: 'dist/css/'
};

// Static Server + watching scss/html files
gulp.task('browser-sync', ['sass'], () => {
    browserSync.init(null, {
        server: {
            baseDir: './'
        }
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return gulp
        .src(source.sassMain)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest.css))
        .pipe(browserSync.stream());
    // .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], () => {
    gulp.watch(source.sass, ['sass']);
    gulp.watch(source.view).on('change', browserSync.reload);
    gulp.watch(source.js).on('change', browserSync.reload);
});
