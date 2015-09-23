module.exports = function ( grunt ) {
    'use strict';

    // configure grunt
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        dirs: {
            dir: 'dir'
        }
    } );

    // load all tasks from given directory
    grunt.loadTasks( 'build' );

    // register all tasks
    grunt.registerTask( 'default', [ 'taskname' ] );
};
