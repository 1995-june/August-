/*
 * @Author: your name
 * @Date: 2021-06-09 20:12:22
 * @LastEditTime: 2021-06-11 11:42:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Javascript\Dom常用封装\dom.js
 */
var dom = {
    sibling: function(ele) { // 封装一个其它兄弟的方法
        var parent = ele.parentNode;
        var children = parent.children;
        var brother = [];
        for (var i = 0; i < children.length; i++) {
            if (children[i] != ele) {
                brother.push(children[i])
            }
        }
        return brother;
    },

    // 1. 封装一个添加类名的方法
    addClass: function(ele, className) { // 接受两个参数，元素，类名
        var oldClassName = ele.className; // 接受传过来的实参，并赋值给一个变量，接收到的是元素的类名
        var newClass = oldClassName ? oldClassName.split(' ') : []; // 判断： 如果接受到了值，就把类名转换为数组，否则返回空数组
        if (newClass.indexOf(className) == -1) {
            newClass.push(className); // 把第二个形参push到这个变量里
        }

        ele.className = newClass.join(' '); // 再把元素类名从数组转换为字符串
    },

    // 2. 封装一个删除类名的方法
    removeClass: function(ele, className) {
        var oldClassName = ele.className; // 接受传过来的实参，并赋值给一个变量，接收到的是元素的类名
        var newClass = oldClassName ? oldClassName.split(' ') : []; // 判断： 如果接受到了值，就把类名转换为数组，否则返回空数组
        for (var i = 0; i < newClass.length; i++) { // 循环这个newClass数组
            if (newClass[i] == className) { // 判断： 如果newClass里边某一个类名 等等于 传的className的话
                newClass.splice(i, 1) // 从i的索引删除一位
            }
        }
        ele.className = newClass.join(' '); // 再把元素类名从数组转换为字符串
    }
}