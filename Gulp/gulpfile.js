const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourceMaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const gulpImagemin = require("gulp-imagemin");


// comprimir Imagens
function comprimeImagem() {
    return gulp.src("./source/image/*")
        .pipe(gulpImagemin())
        .pipe(gulp.dest("./build/image"))
}

// Comprimir arquivos
function comprimeJavaScript() {
    return gulp.src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest("./build/scripts"));
}

// Compilar SASS
function compilaSass() {
    return gulp.src("./source/styles/main.scss")
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourceMaps.write("./maps"))
        .pipe(gulp.dest("./build/styles"));
}

exports.default = function() {
    gulp.watch("./source/styles/*.scss", { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch("./source/scripts/*.js", { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch("./source/image/*", { ignoreInitial: false }, gulp.series(comprimeImagem));
}
exports.javascript = comprimeJavaScript;
// exports.image = comprimeImagem;