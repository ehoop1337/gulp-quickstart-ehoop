const { src, dest } = require('gulp');
const include = require('gulp-file-include');

module.exports = function html_build() {
    return src(['src/**/*.html', '!src/components/**/*.html'])
        .pipe(include())
        .pipe(dest('build'))
}