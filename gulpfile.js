"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Dev Server
var open = require('gulp-open'); // URL en Browser

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    path: {
        html: './src/*.html',
        dist: './dist'
    }
}

// Start a local Dev Server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        liverreload: true
    });
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.path.html)
        .pipe(gulp.dest(config.path.dist))
        .pipe(connect.reload());
});

gulp.task('default', ['html', 'open']);

