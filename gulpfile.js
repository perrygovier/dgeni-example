var gulp = require('gulp');
var Dgeni = require('dgeni');

gulp.task('docs', function() {
  try {
    var dgeni = new Dgeni([require('./scripts/dgeni-example')]);
    return dgeni.generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
});

gulp.task('default', ['dgeni']);
