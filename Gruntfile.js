module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      option: {
        port: 1337,
        hostname: 'localhost',
        base: './src/app',
        open: true
      }
    }
  });

  ['grunt-connect'].forEach(function (task) {
      grunt.loadNpmTasks(task);
  });

  grunt.registerTask('start', ['connect']);
};
