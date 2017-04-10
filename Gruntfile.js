var Dgeni = require('dgeni');

module.exports = function(grunt) {

  grunt.registerTask('dgeni', 'Generate docs via dgeni.', function() {
    var done = this.async();
    var dgeni = new Dgeni([require('./scripts/dgeni-example')]);
    dgeni.generate().then(done);
  });

  grunt.registerTask('default', ['dgeni']);

};
