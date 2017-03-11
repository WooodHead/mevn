module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      backend: {
        files: ['app/routes/**/*.js'],
        tasks: ['default']
      }
    }
  });

  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

};
