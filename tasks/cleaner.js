const { src } = require('gulp');
const clean = require('gulp-clean');
// const del = require('del'); Нужно удалить

module.exports = function cleaner() {
    return src('./build/', {read: false})
        .pipe(clean());
};
