const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");

gulp.task("styles", () => {
  return gulp
    .src("src/styles/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/styles/"));
});

gulp.task("clean", () => {
  return del(["src/styles/styles.css"]);
});

gulp.task("default", gulp.series(["clean", "styles"]));

gulp.task("watch", () => {
  gulp.watch("src/styles/scss/*.scss", (done) => {
    gulp.series(["clean", "styles"])(done);
  });
});
