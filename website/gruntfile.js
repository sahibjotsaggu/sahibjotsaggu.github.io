/*global module:false*/
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: 'bower_components'
        }
      }
    },

    jshint: {
      all: ['gruntfile.js', 'js/main.js', 'js/controllers/*.js', 'js/services/*.js', 'js/factories/*.js']
    },

    connect: {
      options: {
        port:80,
        hostname: 'intranet-test.klick.com'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, './')
            ];
          }
          

        }
      }
    },
    
    'gh-pages':{
      options: {
        base: './',
        message: 'Auto-generated commit by grunt-gh-pages'
      },
      src:['./js/**/*.js',
          './*.html',
          './css/**/*.css'
        ]
    },
 

    //Open default browser at the app
    open: {
      server: {
        path: 'http://intranet-test.klick.com:<%= connect.options.port %>'
      }
    },
    //setup watch tasks
    watch: {
      options: {
        nospan: true,
        livereload: LIVERELOAD_PORT
      },
      
      source: {
        files: ['./js/**/*.js'],
        tasks: ['jshint']
      },
      livereload:{
        options: {
          livereload: true, 
        },
        files:[
          './js/**/*.js',
          './*.html',
          './css/**/*.css'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('default', [
        'serve'
    ]);

  grunt.registerTask('serve', function (target) {
    grunt.task.run([

      'connect:livereload',
      'open',
      'jshint',
      'watch'
    ]);
  });


  grunt.registerTask("deploy", [
    'gh-pages'
    
  ]); 

};