/*
 * @Author: your name
 * @Date: 2021-08-25 23:57:22
 * @LastEditTime: 2021-08-27 15:39:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210823-day-13\每日优鲜\js\shoppingCart.js
 */
function goodsPage() {
    var goods = document.querySelector('.goods-wrap > .goods-list > .goods')
    ajax('../lib/data.json', 'get', {}, function(res) {
        var item = res.list;
        goods.innerHTML += item.map((val) => {
            return `
                <dl>
                    <dt>
                        <a href="#"><img src="${val.img}" alt=""></a>
                    </dt>
                    <dd>
                        <h6>${val.goods_name}</h6>
                        <p>${val.desc}</p>
                        <div class="subtitle-wrap">
                            <span>任选两件</span>
                            <span>最快次日达</span>
                        </div>
                        <div class="price-wrap">
                            <span>${val.goods_price}</span> <button type="button">+</button>
                        </div>
                    </dd>
                </dl>`
        }).join('');
        var dl = goods.querySelectorAll('dl');
        PageEvent(dl)
    })
}
goodsPage();

function PageEvent(dl) {

    dl.forEach((val) => {
        val.addEventListener('touchend', function() {
            var dataObj = {
                "img": this.children[0].children[0].children[0].src,
                "title": this.children[1].children[0].innerHTML,
                "con": this.children[1].children[1].innerHTML,
                "subtitle": this.children[1].children[2].children[0].innerHTML,
                "price": this.children[1].children[3].children[0].innerHTML,
            }
            localStorage.setItem('pageData', JSON.stringify(dataObj));
            location.href = '../html/details.html';
        })
    })
}

var sow = document.querySelector('.sow');
var emptyWrap = document.querySelector('.empty-wrap');
console.log(sow.children);

if (sow.children.length > 0) {
    emptyWrap.style.display = 'none';
    sow.style.display = 'block';
} else {
    emptyWrap.style.display = 'block';
    sow.style.display = 'none';
}

var removeBtn = document.querySelector('.right-remove');

removeBtn.addEventListener('touchend', function() {
    sow.remove();
    emptyWrap.style.display = 'block';
})