const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const ttf2woff2 = require('gulp-ttftowoff2');

module.exports = function ttf_to_woff2(done) {
    return src('./src/assets/fonts/**/*.ttf')
        .pipe(changed('./build/assets/fonts', {
            extension: '.woff2',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(ttf2woff2())
        .pipe(dest('./build/assets/fonts'))
    done();
}