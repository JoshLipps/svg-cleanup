module.exports = function(grunt) {

  grunt.initConfig({
    svgmin: {
      options: {

      },
      dist: {
        files: [{
          expand: true,
          cwd: 'SVG',
          src: ['*.svg'],
          dest: 'cleaned'
        }]
      }
    },
    grunticon: {
      myIcons: {
        files: [{
          expand: true,
          cwd: 'cleaned',
          src: ['*.svg'],
          dest: "dest"
        }],
        options: {}
      }
    },
    default: {}
  });

  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-svgmin');

  grunt.registerTask('default', ['svgmin','grunticon:myIcons']);

};
