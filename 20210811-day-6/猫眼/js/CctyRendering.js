/*
 * @Author: your name
 * @Date: 2021-08-12 15:47:46
 * @LastEditTime: 2021-08-21 08:33:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210811-day-6\猫眼\js\CctyRendering.js
 */
var arrange = document.querySelector('.arrange-wrap');
var sideInitials = document.querySelector('.side-initials-wrap');

/* 首字母侧边渲染 */
function CctySideInitialsRendering() {
    var html = `<p>定位</p>
                <p>最近</p>
                <p>热门</p>`;
    for (var key of city.cityArr) {
        html +=
            `<div class="nav">${key.title}</div>`;
    }
    sideInitials.innerHTML = html;
}
CctySideInitialsRendering();

/* 城市地址渲染 */
function CctyaddressRendering() {
    var html = '';
    for (var key of city.cityArr) {
        html += `<div class="Initials">${key.title}</div>`;
        for (var obj of key.city) {
            html += `<div class="arrange"><span>${obj.name}</span></div>`;
        }
    }
    arrange.innerHTML = html;
}
CctyaddressRendering();

var arrange = document.querySelectorAll('.arrange');
var locationTitle = document.querySelector('.location-title-c')

arrange.forEach((val) => {
    val.addEventListener('touchstart', () => {
        var text = {
            "city": val.children[0].innerHTML
        }
        localStorage.setItem('cityLis', JSON.stringify(text)); // 设置被本地数据为JSON字符串
        location.href = '../index.html'; //Location 接口表示其链接到的对象的位置（URL）。


        var txt = JSON.parse(localStorage.getItem('cityLis')); // 转成 js对象

        var inner = locationTitle.innerHTML
        if (inner.indexOf(txt.city) == -1) {
            locationTitle.innerHTML += `<div class="location-title-con">${txt.city}</div>`
        }
    })
})