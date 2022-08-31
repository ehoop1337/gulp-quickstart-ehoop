const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bulk = require('gulp-sass-bulk-importer');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');
const sourcemap = require('gulp-sourcemaps');

module.exports = function scss_build() {
    return src('./src/assets/scss/**/*.scss')
        .pipe(sourcemap.init({loadMaps: true}))
        .pipe(bulk())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions'],
            browsers: [
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 11',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6',
            ],
        }))
        .pipe(clean({
            level: 2
        }))
        .pipe(concat('bundle.min.css'))
        .pipe(sourcemap.write('../sourcemaps/', {addComment: false}))
        .pipe(dest('./build/assets/css/'))
}