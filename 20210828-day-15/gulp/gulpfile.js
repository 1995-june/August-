/*
 * @Author: your name
 * @Date: 2021-08-31 11:48:50
 * @LastEditTime: 2021-08-31 14:05:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \libd:\August\20210828-day-15\gulp\gulpfile.js
 */
var gulp = require('gulp');
var concat = require('gulp-concat'); // 合并js
var rename = require('gulp-rename'); // 重命名
var uglify = require('gulp-uglify'); // 压缩js

// 注册任务
gulp.task('say', function() {
    console.log('2222');
})