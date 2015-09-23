module.exports = function ( grunt ) {
    'use strict';

    // use variable for directory instead of defining in each task
    var dir = '<%= dirs.dir %>';

    // configure task
    grunt.config( 'task-name', {
        options: {},
        dist: {}
    } );

    // load the package
    grunt.loadNpmTasks( 'task-package-name' );
};
