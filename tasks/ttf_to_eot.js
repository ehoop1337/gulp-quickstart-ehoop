const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const ttf2eot = require('gulp-ttf2eot');

module.exports = function ttf_to_eot(done) {
    return src('./src/assets/fonts/**/*.ttf')
        .pipe(changed('./build/assets/fonts', {
            extension: '.eot',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(ttf2eot())
        .pipe(dest('./build/assets/fonts'))
    done();
}