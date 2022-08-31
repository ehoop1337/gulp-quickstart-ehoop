const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const ttf2woff = require('gulp-ttf2woff');

module.exports = function ttf_to_woff(done) {
    return src('./src/assets/fonts/**/*.ttf')
        .pipe(changed('./build/assets/fonts', {
            extension: 'woff',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(ttf2woff())
        .pipe(dest('./build/assets/fonts'))
    done();
}