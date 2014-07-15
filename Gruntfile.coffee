module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    # Clean out the source directory
    clean: ["assets/src/js/"]

    # Handle the bower components.
    bower:
      install:
        options:
          targetDir: "./assets/vendor/components"
          layout: "byComponent"
          copy: true
          install: true
          cleanTargetDir: true
          cleanBowerDir: false
      cleanup:
        options:
          cleanTargetDir: true
          cleanBowerDir: true
          install: false
          copy: false

    # Generate documentation for the coffee.
    groc:
      coffeescript: [
        "assets/coffee/**/*.coffee"
      ],
      options:
        "out": "doc/"

      structure:
        files:
          "public/js/structure.min.js": ["public/js/structure.js"]

      app:
        files:
          "public/js/app.min.js": ["public/js/app.js"]

    # Compile coffee files to src/json
    coffee:
      glob_to_multiple:
        options:
          bare: true
        expand: true
        cwd: 'assets/coffee'
        src: ['**/*.coffee']
        dest: 'assets/src/js/'
        ext: '.js'

    # Compile our less styles
    less:
      development:
        options:
          paths: ["assets/less"]
        files:
          "public/admin/style.css": "assets/less/style.less"
      production:
        options:
          paths: ["assets/less"]
          yuicompress: true
        files:
          "public/admin/style.min.css": "assets/less/style.less"

    # Copy fonts from bower
    copy:
      fonts:
        files: [
            flatten: true
            expand: true
            filter: 'isFile'
            src: [ 'assets/vendor/font-awesome/fonts/**' ]
            dest: 'public/admin/font'
        ]

    # Concat all our src files
    concat:
      structure:
        src: [
          'assets/vendor/components/speakingurl/lib/index.js'
          'assets/vendor/components/marked/lib/marked.js'
          'assets/vendor/libraries/leptureeditor/editor.js'
          'assets/vendor/components/bootstrap/dist/js/bootstrap.js'
          'assets/vendor/components/html5shiv/dist/html5shiv.js'
          'assets/vendor/components/underscore/underscore.js'
          'assets/vendor/components/Eventable/eventable.js'
          'assets/vendor/components/backbone/backbone.js'
          'assets/vendor/components/backbone.marionette/lib/backbone.marionette.js'
          'assets/vendor/components/raphael/raphael.js'
          'assets/vendor/components/morris.js/morris.js'
          'assets/vendor/components/js-md5/js/md5.js'
          'assets/vendor/components/momentjs/moment.js'
          'assets/vendor/components/parsleyjs/dist/parsley.js'
          'assets/vendor/components/backbone.syphon/lib/backbone.syphon.js'
          'assets/vendor/components/sir-trevor-js/sir-trevor.js'
          'assets/vendor/components/codemirror/lib/codemirror.js'
        ]
        dest: 'public/admin/js/structure.js'

      app:
        src: [
          'assets/vendor/ansiparse.js'
          'assets/src/js/templates.js'
          'assets/src/js/config/**/*.js'
          'assets/src/js/app.js'
          'assets/src/js/entities/_base/*.js'
          'assets/src/js/entities/*.js'
          'assets/src/js/controllers/**/*.js'
          'assets/src/js/views/**/*.js'
          'assets/src/js/routers/**/*.js'
          'assets/src/js/utilities/bugsnag.js'
          'assets/src/js/*.js'
          'assets/src/js/helpers/*.js'
          'assets/src/js/**/*.js'
        ]
        dest: 'public/admin/js/app.js'

    # Compile the templates
    jst:
      compile:
        options:
          # templateSettings:
          #   interpolate : /\{\{(.+?)\}\}/g
          processName: (fileName) ->
            return fileName.replace("assets/coffee/apps/", "")
        files:
          "assets/src/js/templates.js": ["assets/coffee/apps/**/*.html", "assets/coffee/components/**/*.html"]

    watch:
      options:
         livereload: true
      coffee:
        files: 'assets/coffee/**/*.coffee'
        tasks: ["clean", "jst", "coffee", "concat"]
        options:
          interrupt: true
      html:
        files: 'assets/coffee/**/*.html'
        tasks: ["jst", "concat"]
        options:
          interrupt: true
      less:
        files: 'assets/**/*.less'
        tasks: ["less"]
        options:
          interrupt: true
      src:
        files: 'assets/vendor/**/*.js'
        tasks: ["concat", "livereload"]
        options:
          interrupt: true

  # Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-less"
  grunt.loadNpmTasks "grunt-contrib-jst"
  grunt.loadNpmTasks "grunt-contrib-livereload"
  grunt.loadNpmTasks "grunt-groc"

  # Default task(s).
  # grunt.registerTask('watch', ['livereload-start', 'regarde']);
  grunt.registerTask "default", ["clean", "less", "coffee", "jst", "concat"]
  grunt.registerTask "develop", ["clean", "less", "coffee", "jst", "concat:app"]
  grunt.registerTask "deploy", ["clean", "less", "coffee", "jst", "concat", "groc"]
  grunt.registerTask "docs", ["groc"]
