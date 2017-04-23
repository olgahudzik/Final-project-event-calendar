var gulp = require ("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');


gulp.task("sass", function(){
  return gulp.src("scss/main.scss")
      .pipe(sourcemaps.init()) //dodaje sourcemaps, ktora pokazuje w wyszukiwarce
      .pipe(sass({outputStyle: 'extended'}).on('error', sass.logError)) //kompiluje z scss do css
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css'))
      .pipe(browser.stream());
});

var browser = require("browser-sync").create();

gulp.task("reload", function(){
  browser.reload();
})

gulp.task("serwer", function(){
  browser.init({
    server: "./"
  });
});

gulp.task("watch", function(){
  gulp.watch(["scss/**/*.scss"], ["sass"]);
  gulp.watch(["*.html", "js/**/*.js"], ["reload"]);
});
