const { src } = require('gulp');
const clean = require('gulp-clean');

module.exports = function clean_build() {
    return src('./build/**/*', {read: false})
        .pipe(clean());
};