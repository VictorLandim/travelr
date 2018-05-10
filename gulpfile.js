const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const source = {
    views: 'views/**/*.ejs',
    sass: 'src/sass/**/*.scss',
    sassMain: 'src/sass/main.scss'
};

const dest = {
    css: 'public/css/'
};

// Static Server + watching scss/html files
gulp.task('browser-sync', ['sass'], () => {
    browserSync.init(null, {
        proxy: 'localhost:5000'
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
    gulp.watch(source.views).on('change', browserSync.reload);
});
