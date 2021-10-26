/*
 * @Author: your name
 * @Date: 2021-08-26 21:49:43
 * @LastEditTime: 2021-08-26 22:19:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML排版案例d:\八月没有六月好\20210823-day-13\每日优鲜\js\search.js
 */
var input = document.querySelector('.search-wrap-active  input');
var list = document.querySelector('.list');
var con = document.querySelector('.con');

input.addEventListener('input', function() {
    var valueS = this.value.trim();
    list.innerHTML = ''
    if (valueS) {
        getSearch(valueS);
    }
    if (this.value.length > 0) {
        con.style.display = 'none';
        list.style.display = 'block';
    } else {
        con.style.display = 'block';
    }
})

function getSearch(valueS) {
    ajax('../lib/data.json', 'get', {}, function(res) {
        var lis = res.list.filter(function(item) {
            return String(item.goods_name).includes(valueS) ||
                String(item.goods_price).includes(valueS) ||
                String(item.seckill_Price).includes(valueS) ||
                String(item.product_id).includes(valueS) ||
                String(item.goods_id).includes(valueS)
        })
        console.log(lis);
        list.innerHTML = lis.map(function(val) {
            return `
                <li>
                    <p>${val.goods_name}</p>
                </li>`
        }).join('');
    })
}

var saveWrap = document.querySelector('.save-wrap')

function lisEvent() {
    list.addEventListener('touchend', function(e) {
        var tag = e.target;
        if (tag.nodeName != 'P') return;
        saveWrap.innerHTML += `<a href="#">${tag.innerHTML}</a>`;
        list.style.display = 'none';
        con.style.display = 'block';
        input.value = '';
    })
}
lisEvent()