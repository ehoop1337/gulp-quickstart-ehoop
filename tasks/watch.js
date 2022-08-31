const { watch, parallel, series} = require('gulp');

module.exports = function watching() {
    watch('src/assets/scss/**/*.scss', parallel('scss_dev'));
    watch('src/assets/js/**/*.js', parallel('js_dev'));
    watch('src/**/*.html', parallel('html_dev'));
    watch('src/assets/fonts/*.ttf', parallel('ttf_to_woff'));
    watch('src/assets/fonts/*.ttf', parallel('ttf_to_woff2'));
    watch('src/assets/fonts/*.ttf', parallel('ttf_to_svg'));
    watch('src/assets/fonts/*.ttf', parallel('ttf_to_eot'));
    watch('src/assets/img/**/*.+(png|jpg|jpeg|gif)', series('img', 'webp'));
}