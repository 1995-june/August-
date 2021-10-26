/*
 * @Author: your name
 * @Date: 2021-08-19 09:43:28
 * @LastEditTime: 2021-08-19 10:06:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\日考\20210819-日考-邓福忠\加载\js\index.js
 */
var pullUp = document.querySelector('.up');
var list = document.querySelector('.list-wrap');
console.log(list);

ajax('./js/data.json', function(res) {
    renderPage(res);
})

function renderPage(res) {
    list.innerHTML += res.map(function(item) {
        return `<li>
                    <div class="con" style="background:url(${item.src}) no-repeat;">
                        <span class="text">${item.title}</span>
                    </div>
                    <div class="bottom-wrap">
                    <div class="left">${item.tiem}</div>
                    <div class="right">${item.praise}</div>
                    </div>
                </li>`
    }).join('');
}


var bs = new BScroll('.main', {
    // 触发上拉事件的阈值。
    pullUpLoad: {
        threshold: 90,
    }
})

bs.on('pullingUp', function() {
    pullUp.innerHTML = '正在加载';
    ajax('./js/data.json', function(res) {
        setTimeout(function() {
            renderUpDara(res);
            bs.finishPullUp(); //结束上拉加载行为。
            bs.refresh();
            console.log(res);
        }, 1000)
    })
})

function renderUpDara(res) {
    list.innerHTML += res.map(function(item) {
        return `<li>
                    <div class="con" style="background:url(${item.src}) no-repeat;">
                        <span class="text">${item.title}</span>
                    </div>
                    <div class="bottom-wrap">
                    <div class="left">${item.tiem}</div>
                    <div class="right">${item.praise}</div>
                    </div>
                </li>`
    }).join('');
}