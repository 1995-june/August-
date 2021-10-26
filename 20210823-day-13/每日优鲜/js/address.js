/*
 * @Author: your name
 * @Date: 2021-08-25 19:20:07
 * @LastEditTime: 2021-08-26 00:27:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210823-day-13\每日优鲜\js\address.js
 */

var sideInitialsWrap = document.querySelector('.side-initials-wrap');
var arrange = document.querySelector('.arrange');

function renderPageAddress() {
    ajax('../lib/city.json', 'get', {}, function(res) {
        var Initials = res.cityArr;
        // 右侧字母导航渲染
        sideInitialsWrap.innerHTML += Initials.map((item) => {
            return `<span class="nav">${item.title}</span>`
        }).join('');

        // 城市地址渲染
        Initials.forEach(val => {
            arrange.innerHTML += `<div class="title"><h3>${val.title}</h3></div>`;
            val.city.forEach(item => {
                arrange.innerHTML += `
                    <div class="lis"><p>${item.name}</p><div>`;
            })
        });

        var nav = document.querySelectorAll('.side-initials-wrap > .nav');
        var title = arrange.querySelectorAll('.title');
        addressScroll(nav, title)
    })
}
renderPageAddress();


function addressScroll(nav, title) {
    var bs = new BScroll('.main');
    sideInitialsWrap.addEventListener('click', (e) => {
        var tag = e.target;
        if (tag.className == "nav") {
            var index = [...nav].indexOf(tag);
            bs.scrollToElement(title[index], 1000)
        }
    })
}


function addressEvent() {
    arrange.addEventListener('touchend', function(e) {
        var tag = e.target;
        if (tag.nodeName == 'P') {
            var title = {
                con: tag.innerHTML
            }
            localStorage.setItem('cityLis', JSON.stringify(title));
            location.href = '../html/receivingAddress.html';
        }
    })
}
addressEvent()

function differentAddress() {
    var differentAddressList = document.querySelector('.different-address-list');
    console.log(differentAddressList);
    differentAddressList.addEventListener('touchend', function(e) {
        var tag = e.target;
        if (tag.nodeName == 'A') {
            console.log(tag);
            var title = {
                con: tag.innerHTML
            }
            localStorage.setItem('cityLis', JSON.stringify(title));
            location.href = '../html/receivingAddress.html';
        }
    })
}

differentAddress()