const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const path = {
    initial: {
        style: 'styles/**/*.css'
    },
    build: {
        style: 'styles/build/'
    }
}

const styles = () => {
    let plugins = [
        autoprefixer(),
        cssnano()
    ];

    return gulp.src(path.initial.style)
        .pipe(postcss(plugins))
        .pipe(gulp.dest(path.build.style));
}

exports.styles = styles;

const watch = () => {
    gulp.watch(path.initial.style, gulp.series(styles));
}

exports.watch = watch;

exports.default = gulp.series(
    gulp.parallel(
        styles,
        watch
    )
)