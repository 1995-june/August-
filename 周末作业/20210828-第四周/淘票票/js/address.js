/*
 * @Author: your name
 * @Date: 2021-08-29 16:39:56
 * @LastEditTime: 2021-08-29 21:18:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\周末作业\20210828-第四周\淘票票\js\address.js
 */
var addressLis = document.querySelector('.address-lis');
var sideInitials = document.querySelector('.side-initials');

function renderAddress() {
    ajax('../lib/city.json', 'get', {}, function(res) {
        var Initials = res.cityArr;
        sideInitials.innerHTML += Initials.map(function(val) {
            return `<span class="nav">${val.title}</span>`
        }).join('');

        // 城市地址渲染
        Initials.forEach(val => {
            addressLis.innerHTML += `<div class="title"><h3>${val.title}</h3></div>`;
            val.city.forEach(item => {
                addressLis.innerHTML += `
                <div class="lis"><p>${item.name}</p><div>`;
            })
        });
        var nav = sideInitials.querySelectorAll('.nav');
        var title = addressLis.querySelectorAll('.title');
        var lis = addressLis.querySelectorAll('.lis');
        addressScroll(nav, title, lis)
    })
}
renderAddress();
var historicalVisit = document.querySelector('.historical-visit');

function addressScroll(nav, title, lis) {
    var bs = new BScroll('.main');
    sideInitials.addEventListener('click', (e) => {
        var tag = e.target;
        if (tag.className == "nav") {
            var index = [...nav].indexOf(tag);
            bs.scrollToElement(title[index], 1000)
        }
    })

    lis.forEach(function(item) {
        item.addEventListener('touchend', function() {
            localStorage.getItem('cityListS') || localStorage.setItem('cityListS', '[]');
            var arr = JSON.parse(localStorage.getItem('cityListS'));

            if (arr.indexOf(this.children[0].innerHTML.trim()) == -1) {
                arr.unshift(this.children[0].innerHTML);
            }

            var con = JSON.parse(localStorage.getItem('cityListS'));
            historicalVisit.innerHTML = con.map(item => {
                return `<a href="#">${item}</a>`
            }).join('');

            localStorage.setItem('cityListS', JSON.stringify(arr));

            var singleCon = {
                txt: this.children[0].innerHTML
            }
            localStorage.setItem('single', JSON.stringify(singleCon))
            location.href = '../index.html';

        })
    })
}

function vagueSearch() {
    var search = document.querySelector('.search input');
    var bas = document.querySelector('.bas');
    var list = document.querySelector('.list');

    search.addEventListener('input', function() {
        var values = this.value.trim();

        if (values) {
            searchResult(values);
        }

        list.innerHTML = ''
        if (this.value.length >= 1) {
            bas.style.display = 'none';
        } else {
            bas.style.display = 'block';
        }
    })
}
vagueSearch()

function searchResult(value) {
    var list = document.querySelector('.list');

    ajax('../lib/city.json', 'get', {}, function(res) {
        var result = res.cityArr;
        result.forEach(function(val) {
            var lis = val.city.filter(function(time) {
                return String(time.name).includes(value)
            })
            list.innerHTML += lis.map(val => {
                return `<div class="time">${val.name}</div>`
            }).join('');
        })
    })
}

function lisEvent(list) {
    var list = document.querySelector('.list');
    var historicalVisit = document.querySelector('.historical-visit')
    var searchResult = document.querySelector('.search-result')
    var input = document.querySelector('.search input')
    list.addEventListener('touchend', function(e) {
        var tag = e.target;
        if (tag.className == 'time') {
            // historicalVisit.innerHTML += `<a href="#">${this.innerHTML}</a>`
        }
    })
}
lisEvent()