/*
 * @Author: your name
 * @Date: 2021-08-11 17:34:22
 * @LastEditTime: 2021-08-21 08:34:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210811-day-6\猫眼\js\pageRender.js
 */


var nav = document.querySelector('nav');
var deposit = document.querySelector('nav>a');
var wellReceived = document.querySelector('.well-received');
var key;

function tabContent() {

    // 通过冒泡原理，在父元素上使用事件委托，给每个 a 添加点击事件
    nav.onclick = function(event) {

        // 取到当前所点击的事件目标元素
        var _this = event.target
        key = _this.dataset.key
            // 判断是否为非法元素
        if (_this.nodeName != 'A') return;
        // 调用效果实现方法
        hoverDisplay(_this);
    }

    function hoverDisplay(_this) {
        var divActive = document.querySelector('.' + key)

        // 边框
        if (deposit) {
            deposit.classList.remove('active');
        }
        _this.classList.add('active'); // 当点击到当前元素时，给当前元素添加类名
        deposit = _this; // 把上一次点击的元素类名，赋值给一个用来临时存储类名的变量

        // 菜单显示隐藏
        if (wellReceived) {
            wellReceived.classList.remove('visible');

        }
        divActive.classList.add('visible');
        wellReceived = divActive;
    }
}
tabContent()
    /* 首页内容渲染 */
function pageRender() {
    var list = document.querySelector('.list')

    ajax('./common/data.json', 'get', {},
        function(res) {
            var lis = res.movieList
            list.innerHTML += lis.map(function(item) {
                return `<dl>
                        <dt><img src="${item.img}" alt=""></dt>
                        <dd>
                            <h4>${item.nm}</h4>
                            <span>观众评 <b>${item.sc}</b></span>
                            <p class="to-star">${item.star}</p>
                            <p>${item.showInfo}</p>
                            <a href="#" class="ticket">购票</a>
                        </dd>
                    </dl>`;
            }).join('');
            var dl = document.querySelectorAll('.list > dl');
            storage(dl)

        })
}
pageRender();


function storage(dl) {
    var arr = JSON.parse(localStorage.getItem('data')); // 转成 js对象
    var h6 = document.querySelector('.city>a>h6');
    var dl = document.querySelectorAll('.list > dl');
    h6.innerHTML = arr.cityLis;
    dl.forEach((val) => {
        val.addEventListener('click', () => {
            var inner = {
                "img": val.children[0].children[0].src,
                "h4": val.children[1].children[0].innerHTML,
                "span": val.children[1].children[1].innerHTML,
                "b": val.children[1].children[1].children[0].innerHTML,
                'p1': val.children[1].children[2].innerHTML,
                'p2': val.children[1].children[3].innerHTML,
            }
            localStorage.setItem('dl', JSON.stringify(inner)); // 设置被本地数据为JSON字符串
            location.href = './html/detailPage.html'; //Location 接口表示其链接到的对象的位置（URL）。
        })
    })
}