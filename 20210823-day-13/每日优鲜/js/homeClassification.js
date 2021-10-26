/*
 * @Author: your name
 * @Date: 2021-08-26 15:42:30
 * @LastEditTime: 2021-08-26 18:53:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210823-day-13\每日优鲜\js\homeClassification.js
 */
var lis = document.querySelectorAll('.lis-nav > li');
var panel = document.querySelectorAll('.sub-menu > .panel');
lis.forEach((val, i) => {
    val.index = i;
    val.addEventListener('touchend', function(e) {
        this.classList.add('active');
        panel.forEach((item, i) => {
            if (i == this.index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })

        var children = [...this.parentNode.children];
        console.log(children);
        children.forEach((li) => {
            if (li != this) {
                li.classList.remove('active')
            }
        })
    })
})