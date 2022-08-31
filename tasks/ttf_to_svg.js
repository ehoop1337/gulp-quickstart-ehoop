const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const ttf2svg = require('gulp-ttf-svg');

module.exports = function ttf_to_svg(done) {
    return src('./src/assets/fonts/**/*.ttf')
        .pipe(changed('./build/assets/fonts', {
            extension: '.svg',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(ttf2svg())
        .pipe(dest('./build/assets/fonts'))
    done();
}