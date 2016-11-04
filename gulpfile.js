'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('js', function () {
    return gulp.src('app/*js')
        .pipe();
});

gulp.task('serve', function () {

    // Start browser process
    electron.start();

    // Restart browser process
    // gulp.watch('app.js', electron.restart);

    // Reload renderer process
    gulp.watch(['index.js', 'index.html', 'public/js/bundle.js'], electron.reload);
});

gulp.task('reload:browser', function () {
    // Restart main process
    electron.restart();
});

gulp.task('reload:renderer', function () {
    // Reload renderer process
    electron.reload();
});

gulp.task('default', ['serve']);