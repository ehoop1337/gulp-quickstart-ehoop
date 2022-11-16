const { src, dest } = require('gulp');
module.exports = function ttf() {
    return src('./src/assets/fonts/**/*.ttf')
        .pipe(dest('build/assets/fonts'));
}