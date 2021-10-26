/*
 * @Author: your name
 * @Date: 2021-08-22 17:13:58
 * @LastEditTime: 2021-08-27 15:28:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210823-day-13\每日优鲜\js\index.js
 */

/* 轮播插件 */
function RotationPlugIn() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
RotationPlugIn();

function goodsPage() {
    var goodsX = document.querySelector('.goods-x');
    var goods = document.querySelector('.goods-wrap > .goods-list > .goods');
    goodsScrllList(goodsX)

    ajax('./lib/data.json', 'get', {}, function(res) {
        var item = res.list;
        goodsX.innerHTML += item.map((val) => {
            return `     
                <dl>
                    <dt>
                        <a href="#"><img src="${val.img}" alt=""></a>
                    </dt>
                    <dd>
                        <p>${val.goods_name}</p>
                        <div class="subtitle-wrap">
                            <a href="#">最快次日达</a>
                        </div>
                        <div class="price-wrap">
                            <span>￥${val.goods_price}</span> <button type="button">+</button>
                        </div>
                    </dd>
                </dl>`
        }).join('');

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
        }).join('')
        var dl = goods.querySelectorAll('dl');
        PageEvent(dl)
    })

}
goodsPage();

function PageEvent(dl, goodsX) {
    console.log(goodsX);

    dl.forEach((val) => {
        val.addEventListener('touchend', function() {
            var dataObj = {
                    "img": this.children[0].children[0].children[0].src,
                    "title": this.children[1].children[0].innerHTML,
                    "con": this.children[1].children[1].innerHTML,
                    "subtitle": this.children[1].children[2].children[0].innerHTML,
                    "price": this.children[1].children[3].children[0].innerHTML,
                }
                // console.log(dataObj);
            localStorage.setItem('pageData', JSON.stringify(dataObj));
            location.href = './html/details.html';
        })
    })

}
var footer = document.querySelector('.footer')
var num = footer.querySelector('.num')

function goodsScrllList(goodsX) {
    goodsX.addEventListener('touchend', function(e) {
        var tag = e.target;
        if (tag.nodeName == 'BUTTON') {
            var goodesAddData = {
                img: tag.parentNode.parentNode.parentNode.children[0].children[0].children[0].src,
                name: tag.parentNode.parentNode.parentNode.children[1].children[0].innerHTML,
                price: tag.parentNode.parentNode.parentNode.children[1].children[2].children[0].innerHTML,
                add: num.innerHTML++
            }

            localStorage.getItem('goodesAdd') || localStorage.setItem('goodesAdd', '[]');
            var arr = JSON.parse(localStorage.getItem('goodesAdd')); // 转成 js对象

            /* 判断 去重 去空格 */
            if (arr.indexOf(goodesAddData) == -1) {
                arr.unshift(goodesAddData); // 数值前面插入一个
                console.log(goodesAddData);

            }
            localStorage.setItem('goodesAdd', JSON.stringify(arr));
            num.style.display = 'block';
        }
        if (tag.nodeName == 'IMG') {
            // location.href = './html/shoppingCart.html';
        }
    })
}