const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bulk = require('gulp-sass-bulk-importer');
const concat = require('gulp-concat');
// const cleanCSS = require('gulp-clean-css'); Нужно удалить
const bs = require('browser-sync');

module.exports = function scss_dev() {
    return src('./src/assets/scss/index.scss')
        .pipe(bulk())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('bundle.min.css'))
        .pipe(dest('./build/assets/css/'))
    .pipe(bs.stream())
}