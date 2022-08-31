const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.scss_build = tasks.scss_build;
exports.js_build = tasks.js_build;
exports.scss_dev = tasks.scss_dev;
exports.js_dev = tasks.js_dev;
exports.watch = tasks.watch;
exports.html_dev = tasks.html_dev;
exports.html_build = tasks.html_build;
exports.ttf_to_woff = tasks.ttf_to_woff;
exports.ttf_to_woff2 = tasks.ttf_to_woff2;
exports.ttf_to_svg = tasks.ttf_to_svg;
exports.ttf_to_eot = tasks.ttf_to_eot;
exports.img = tasks.img;
exports.webp = tasks.webp;
exports.clean_build = tasks.clean_build;

exports.default = gulp.parallel(
    exports.scss_build,
    exports.js_build,
    exports.html_build,
    exports.ttf_to_woff,
    exports.ttf_to_woff2,
    exports.ttf_to_svg,
    exports.ttf_to_eot,
    exports.img,
    exports.webp
);

exports.dev = gulp.parallel(
    exports.scss_dev,
    exports.js_dev,
    exports.html_dev,
    exports.ttf_to_woff,
    exports.ttf_to_woff2,
    exports.ttf_to_svg,
    exports.ttf_to_eot,
    exports.img,
    exports.webp,
    exports.watch
);

exports.clean = gulp.parallel(
    exports.clean_build
);