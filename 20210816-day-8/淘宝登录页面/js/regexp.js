/*
 * @Author: your name
 * @Date: 2021-07-28 18:57:19
 * @LastEditTime: 2021-07-28 21:02:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\js又末一个月，丢死人哟\作业\20210728-正则表单验证\module\regexp.js
 */

// 表单验证
var formValidation = {

    //用户姓名
    userName: function(val) {
        return /^[0-9A-Za-z.@_]{6,16}$/.test(val);
    },

    // 邮箱
    email: function(val) {
        return /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/.test(val);
    },

    // 手机号
    cellPhoneNumber: function(val) {
        return /^1[3-9]\d{9}$/.test(val)
    },

    // 密码
    password: function(val) {
        return /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_]{6,18}$/.test(val)
    },

    // 验证码
    code: function(val) {
        return /^[A-Za-z0-9]{6}$/.test(val)
    }
}