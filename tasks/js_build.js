const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sourcemap = require('gulp-sourcemaps');

module.exports = function js_build() {
    return src(['src/components/**/*.js', 'src/assets/js/scripts.js'])
        .pipe(sourcemap.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('bundle.min.js'))
        .pipe(sourcemap.write('../sourcemaps', {addComment: false}))
        .pipe(dest('build/assets/js/'))
}